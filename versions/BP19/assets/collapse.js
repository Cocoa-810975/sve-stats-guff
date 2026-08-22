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