// decklog 卡组代理（Vercel Serverless Function, CommonJS）
//
// 为什么需要：decklog 的接口只认带 `Referer: https://decklog.bushiroad.com/view/<code>`
// 的请求（实测带 Referer 才返回卡组，否则 200 + []），而浏览器禁止 JS 设置 Referer，
// 也不给 CORS 头，所以纯前端读不到。这个函数在服务端补上 Referer，
// 页面用同源的 /api/decklog?code=XXX 调它，没有任何跨域问题。
//
// 返回：decklog 原始 JSON（透传）；失败时 { error: "..." } + 4xx/5xx
const DECKLOG_URL = "https://decklog.bushiroad.com/system/app/api/view/";

module.exports = async function handler(req, res) {
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "public, max-age=300");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "只支持 GET" }));
    return;
  }

  const raw = (req.query && req.query.code) || "";
  const code = String(raw).trim().toUpperCase();
  if (!/^[A-Z0-9]{3,12}$/.test(code)) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "decklog 卡组码应为 3–12 位字母或数字，例如 15TJBE" }));
    return;
  }

  let upstream;
  try {
    upstream = await fetch(DECKLOG_URL + code, {
      method: "POST",
      headers: {
        // 关键：浏览器设不了这个头
        Referer: `https://decklog.bushiroad.com/view/${code}`,
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/json, text/plain, */*",
        "User-Agent": "ShadowverseEvolveNEXT",
      },
      signal: AbortSignal.timeout(15000),
    });
  } catch (error) {
    res.statusCode = 502;
    res.end(JSON.stringify({ error: `连不上 decklog：${error && error.message ? error.message : error}` }));
    return;
  }

  const text = await upstream.text();
  if (upstream.status === 404) {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: `decklog 上没有这个卡组：${code}` }));
    return;
  }
  if (!upstream.ok) {
    res.statusCode = 502;
    res.end(JSON.stringify({ error: `decklog 返回 ${upstream.status}` }));
    return;
  }

  let payload;
  try {
    payload = JSON.parse(text);
  } catch {
    res.statusCode = 502;
    res.end(JSON.stringify({ error: "decklog 返回的不是 JSON" }));
    return;
  }

  // decklog 用 200 + [] 表示"没有这个卡组"
  if (!payload || typeof payload !== "object" || Array.isArray(payload) || !Array.isArray(payload.list) || payload.list.length === 0) {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: `decklog 没有这个卡组的卡牌数据（${code}）` }));
    return;
  }
  if (payload.game_title_id !== 6) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: `这个 decklog 卡组不是 Shadowverse EVOLVE（game_title_id=${payload.game_title_id}）` }));
    return;
  }

  res.statusCode = 200;
  res.end(JSON.stringify(payload));
};
