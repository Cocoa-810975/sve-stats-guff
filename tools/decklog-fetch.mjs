#!/usr/bin/env node
// 取 decklog 卡组（Node 18+，只用到内置 fetch）
//
//   node decklog-fetch.mjs 15TJBE          -> 把 decklog 的原始 JSON 打到标准输出
//   node decklog-fetch.mjs 15TJBE --pretty -> 缩进后的 JSON
//
// 为什么需要它：decklog 的接口 https://decklog.bushiroad.com/system/app/api/view/<code>
// 只认它自己站内的 POST（要 X-Requested-With 和 Referer），浏览器的跨域请求读不到响应，
// 所以牌组工具里那个「读取」按钮基本一定会失败；用它取到 JSON 再粘进网页即可。
//
// 取到的 JSON 结构：{ game_title_id: 6, title, list: [{card_number, num}], sub_list: [...], p_list: [...] }
import { argv, exit } from "node:process";

const args = argv.slice(2);
const pretty = args.includes("--pretty");
const code = (args.find((a) => !a.startsWith("--")) || "").trim().toUpperCase();

if (!code) {
  console.error("用法：node decklog-fetch.mjs <卡组码>   例如 node decklog-fetch.mjs 15TJBE");
  exit(2);
}
if (!/^[A-Z0-9]{3,12}$/.test(code)) {
  console.error(`卡组码格式不对：「${code}」应该是 3–12 位字母或数字，例如 15TJBE（就是网址 /view/15TJBE 的最后一段）。`);
  exit(2);
}

const url = `https://decklog.bushiroad.com/system/app/api/view/${code}`;

let response;
try {
  response = await fetch(url, {
    method: "POST",
    headers: {
      // decklog 只给"看起来像它自己页面"的请求回数据
      "X-Requested-With": "XMLHttpRequest",
      Referer: `https://decklog.bushiroad.com/view/${code}`,
      Accept: "application/json, text/plain, */*",
      "User-Agent": "ShadowverseEvolveNEXT"
    },
    signal: AbortSignal.timeout(20000)
  });
} catch (error) {
  console.error(`连不上 decklog：${error.message}`);
  console.error("检查一下网络（能不能打开 https://decklog.bushiroad.com ）。");
  exit(1);
}

if (response.status === 404) {
  console.error(`decklog 上没有这个卡组：${code}`);
  exit(1);
}
if (!response.ok) {
  console.error(`decklog 返回了 ${response.status}，请稍后再试。`);
  exit(1);
}

let payload;
try {
  payload = await response.json();
} catch {
  console.error("decklog 返回的不是 JSON，可能被拦在登录页或维护页了。");
  exit(1);
}

if (!payload || typeof payload !== "object" || Array.isArray(payload) || !Array.isArray(payload.list) || payload.list.length === 0) {
  console.error(`decklog 没有这个卡组的卡牌数据（${code}）。确认是 Shadowverse EVOLVE 的卡组、并且是公开的。`);
  exit(1);
}
if (payload.game_title_id !== 6) {
  console.error(`这个 decklog 卡组不是 Shadowverse EVOLVE（game_title_id=${payload.game_title_id}）。`);
  exit(1);
}

process.stdout.write(pretty ? JSON.stringify(payload, null, 2) : JSON.stringify(payload));
