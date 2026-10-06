(function() {
  function saveReturnPosition(link) {
    try {
      var section = link.closest ? link.closest('.class-section') : null;
      sessionStorage.setItem('sve_report_return', JSON.stringify({
        y: window.scrollY || document.documentElement.scrollTop || 0,
        sectionId: section && section.id ? section.id : '',
        t: Date.now()
      }));
    } catch (error) {}
  }

  function setCollapsed(section, collapsed) {
    section.classList.toggle('is-collapsed', collapsed);
    var button = section.querySelector('.toggle-btn');
    if (button) {
      button.textContent = collapsed ? '展开' : '收起';
      button.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    }
  }

  function expandSectionByHash(hash) {
    if (!hash || hash === '#pie-charts' || hash === '#popular') return;
    var target = document.querySelector(hash);
    if (!target) return;
    var section = target.classList.contains('class-section') ? target : target.closest('.class-section');
    if (section) {
      setCollapsed(section, false);
      setTimeout(function() {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  }

  function bindCollapsibles() {
    document.querySelectorAll('.class-section').forEach(function(section) {
      if (section.dataset.bound === '1') return;
      section.dataset.bound = '1';
      var header = section.querySelector('.class-header');
      var button = section.querySelector('.toggle-btn');
      if (!header) return;
      header.addEventListener('click', function(event) {
        event.preventDefault();
        setCollapsed(section, !section.classList.contains('is-collapsed'));
      });
      if (button) {
        button.addEventListener('click', function(event) {
          event.stopPropagation();
          setCollapsed(section, !section.classList.contains('is-collapsed'));
        });
      }
    });
    document.querySelectorAll('a[href^="decktypes/"]').forEach(function(link) {
      if (link.dataset.returnBound === '1') return;
      link.dataset.returnBound = '1';
      link.addEventListener('click', function() {
        saveReturnPosition(link);
      });
    });
  }
  window.sveBindCollapsibles = bindCollapsibles;
  bindCollapsibles();

  document.addEventListener('click', function(event) {
    var link = event.target.closest ? event.target.closest('.nav a') : null;
    if (link) expandSectionByHash(link.getAttribute('href'));
  });

  document.querySelectorAll('a[href^="#decktype-"]').forEach(function(link) {
    link.addEventListener('click', function() {
      expandSectionByHash(link.getAttribute('href'));
    });
  });

  window.addEventListener('hashchange', function() {
    expandSectionByHash(window.location.hash);
  });

  var expandAll = document.getElementById('expand-all');
  var collapseAll = document.getElementById('collapse-all');
  if (expandAll) expandAll.addEventListener('click', function() {
    document.querySelectorAll('.class-section').forEach(function(section) {
      setCollapsed(section, false);
    });
  });
  if (collapseAll) collapseAll.addEventListener('click', function() {
    document.querySelectorAll('.class-section').forEach(function(section) {
      setCollapsed(section, true);
    });
  });

  if (window.location.hash) expandSectionByHash(window.location.hash);

  try {
    var params = new URLSearchParams(window.location.search || '');
    if (params.get('restore') === '1') {
      var raw = sessionStorage.getItem('sve_report_return');
      if (raw) {
        var saved = JSON.parse(raw);
        if (saved.sectionId) {
          var savedSection = document.getElementById(saved.sectionId);
          if (savedSection) setCollapsed(savedSection, false);
        }
        setTimeout(function() {
          window.scrollTo({ top: Number(saved.y || 0), behavior: 'auto' });
          if (history && history.replaceState) {
            history.replaceState(null, '', window.location.pathname + window.location.hash);
          }
        }, 50);
      }
    }
  } catch (error) {}
})();

(function() {
  var CARDS_PATH = window.SVE_CARDS_JSON || 'assets/cards/cards.json';
  var cardsPromise = null;
  var cardsData = null;

  // 把内嵌数据转成弹窗使用的对象形态。
  // cards-data.js 用紧凑结构：{ nos:[卡号...], cards:[[中文名,效果],...] }
  function normalizeEmbedded(raw) {
    if (!raw) return null;
    var out = {};
    if (raw.nos && raw.cards) {
      for (var i = 0; i < raw.nos.length; i++) {
        var v = raw.cards[i] || [];
        out[raw.nos[i]] = { name_cn: v[0] || '', desc_cn: v[1] || '', desc_jp: '' };
      }
      return out;
    }
    // 兼容旧的「卡号 -> [中文名,效果]」对象形态
    for (var no in raw) {
      if (!Object.prototype.hasOwnProperty.call(raw, no)) continue;
      var w = raw[no];
      out[no] = Array.isArray(w)
        ? { name_cn: w[0] || '', desc_cn: w[1] || '', desc_jp: '' }
        : w;
    }
    return out;
  }

  function loadCards() {
    if (cardsPromise) return cardsPromise;
    // 优先用内嵌数据（本地 file:// 场景唯一可行的方式）
    var embedded = normalizeEmbedded(window.SVE_CARD_DATA);
    if (embedded && Object.keys(embedded).length) {
      cardsData = embedded;
      cardsPromise = Promise.resolve(cardsData);
      return cardsPromise;
    }
    if (typeof fetch !== 'function') {
      cardsData = {}; cardsPromise = Promise.resolve(cardsData); return cardsPromise;
    }
    cardsPromise = fetch(CARDS_PATH)
      .then(function(res) { return res.ok ? res.json() : null; })
      .then(function(data) { cardsData = data && data.cards ? data.cards : {}; return cardsData; })
      .catch(function() { cardsData = {}; return cardsData; })
      .then(function(d) {
        // fetch 被拒（常见于 file:// 直接打开本地文件）且无内嵌数据时明确提示
        if (!Object.keys(d).length && !window.SVE_CARD_DATA) {
          window.__SVE_CARD_FETCH_FAILED = true;
        }
        return d;
      });
    return cardsPromise;
  }

  var overlay = document.createElement('div');
  overlay.className = 'card-modal-overlay';
  overlay.innerHTML = '<div class="card-modal">'
    + '<img id="card-modal-img" src="" alt="">'
    + '<div class="card-modal-cn" id="card-modal-cn"></div>'
    + '<div class="card-modal-stats" id="card-modal-stats"></div>'
    + '<div class="card-modal-meta" id="card-modal-meta"></div>'
    + '<div id="card-modal-effect"></div>'
    + '</div>';
  document.body.appendChild(overlay);

  function closeModal() { overlay.classList.remove('active'); }
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderEffect(container, num, needCnFallback) {
    if (!num) { container.innerHTML = ''; return; }
    container.innerHTML = '<div class="card-effect-loading">正在载入卡牌效果…</div>';
    loadCards().then(function(cards) {
      var card = cards[num];
      // 优先显示中文名：页面自带的中文名缺失时，回退到数据表里的中文名
      if (needCnFallback && card && card.name_cn) {
        var cnEl = overlay.querySelector('#card-modal-cn');
        if (cnEl) { cnEl.textContent = card.name_cn; cnEl.style.color = '#fff'; }
      }
      if (!card) {
        if (window.__SVE_CARD_FETCH_FAILED) {
          // 典型场景：直接双击打开本地 html（file:// 协议），浏览器禁止读取本地 json
          container.innerHTML = '<div class="card-effect-note">'
            + '读取卡牌数据失败：浏览器不允许 <code>file://</code> 页面读取本地文件。<br>'
            + '本地查看请用本地服务器打开，例如在项目目录执行 '
            + '<code>npx serve site</code> 或 <code>python -m http.server</code>，'
            + '然后访问 <code>http://localhost:端口</code>。'
            + '</div>';
        } else {
          container.innerHTML = '<div class="card-effect-note">暂无该卡的效果文本</div>';
        }
        return;
      }
      // 效果文本：优先中文；无中文时回退日文（标注暂未翻译）；两者都无才提示无效果
      var html = '<div class="card-effect">';
      if (card.desc_cn) {
        html += '<div class="card-effect-section"><div class="card-effect-label">效果</div>'
          + '<div class="card-effect-text">' + escapeHtml(card.desc_cn) + '</div></div>';
      } else if (card.desc_jp) {
        html += '<div class="card-effect-section">'
          + '<div class="card-effect-label">效果（暂未翻译）</div>'
          + '<div class="card-effect-text" style="color:#b8c7dd">' + escapeHtml(card.desc_jp) + '</div>'
          + '<div class="card-effect-note">该卡在数据源中暂无中文效果文本，此处显示日文原文</div>'
          + '</div>';
      } else {
        html += '<div class="card-effect-note">该卡无效果文本（可能为无能力的白板卡）</div>';
      }
      html += '</div>';
      container.innerHTML = html;
    });
  }

  document.addEventListener('click', function(e) {
    var img = e.target.closest ? e.target.closest('.card-zoomable') : null;
    if (!img) return;
    e.preventDefault();
    e.stopPropagation();
    var modalImg = overlay.querySelector('#card-modal-img');
    modalImg.src = img.src;
    modalImg.alt = img.alt || '';
    var cn = img.dataset.cn || '';
    var cnEl = overlay.querySelector('#card-modal-cn');
    if (cn) { cnEl.textContent = cn; cnEl.style.color = '#fff'; }
    else { cnEl.textContent = ''; }
    var stats = [];
    if (img.dataset.cost) stats.push('费用 ' + img.dataset.cost);
    if (img.dataset.attack) stats.push('攻击 ' + img.dataset.attack);
    if (img.dataset.life) stats.push('体力 ' + img.dataset.life);
    if (img.dataset.cardtype) stats.push(img.dataset.cardtype);
    overlay.querySelector('#card-modal-stats').textContent = stats.join('　');
    var meta = [];
    if (img.dataset.zone) meta.push(img.dataset.zone);
    if (img.dataset.num) meta.push(img.dataset.num);
    overlay.querySelector('#card-modal-meta').textContent = meta.join(' · ');
    renderEffect(overlay.querySelector('#card-modal-effect'), img.dataset.num || '', !cn);
    overlay.classList.add('active');
  }, true);
})();