/* ==========================================================================
   LevelUp Media Brand Guidelines — Reference Manual JS Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initActiveNavigation();
  initMobileDrawer();
  initColorCopying();
  initSearchModal();
});

/* 1. Highlight Active Nav Item */
function initActiveNavigation() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Normalize relative paths vs pathname
    const linkPath = href.replace(/\.\.\//g, '').replace(/^\//, '');
    const cleanCurrentPath = currentPath.replace(/^\//, '');

    if (cleanCurrentPath === linkPath || 
        (linkPath !== '' && linkPath !== 'index.html' && cleanCurrentPath.includes(linkPath.split('/')[0]))) {
      link.classList.add('active');
    } else if ((cleanCurrentPath === '' || cleanCurrentPath === 'index.html') && (linkPath === 'index.html' || linkPath === '/')) {
      link.classList.add('active');
    }
  });
}

/* 2. Mobile Sidebar Drawer */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const sidebar = document.querySelector('.doc-sidebar');

  if (!toggleBtn || !sidebar) return;

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Close when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('open') && 
        !sidebar.contains(e.target) && 
        !toggleBtn.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
}

/* 3. Click to Copy Color Values */
function initColorCopying() {
  // Create Toast element if not present
  let toast = document.querySelector('.copy-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'copy-toast';
    document.body.appendChild(toast);
  }

  document.addEventListener('click', (e) => {
    const chip = e.target.closest('[data-copy]');
    if (!chip) return;

    const copyValue = chip.getAttribute('data-copy');
    if (!copyValue) return;

    navigator.clipboard.writeText(copyValue).then(() => {
      showToast(`Copied ${copyValue} to clipboard`);
    }).catch(err => {
      showToast(`Value: ${copyValue}`);
    });
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }
}

/* 4. Client-side Search Modal */
function initSearchModal() {
  const searchBtns = document.querySelectorAll('.search-trigger-btn, .search-trigger-action');
  
  // Inject Search Modal Markup if not present
  if (!document.getElementById('searchModal')) {
    const modalHTML = `
      <div id="searchModal" class="search-modal-backdrop" aria-hidden="true">
        <div class="search-modal-card">
          <div class="search-input-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="searchInput" class="search-input-field" placeholder="Search guidelines (e.g. logo clearspace, blue orchid, geist)..." />
            <span class="search-shortcut">ESC</span>
          </div>
          <div id="searchResults" class="search-results-list">
            <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.875rem;">
              Type keywords to search across all brand guidelines...
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  const modal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  function openModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => searchInput.focus(), 50);
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    searchInput.value = '';
  }

  searchBtns.forEach(btn => btn.addEventListener('click', openModal));

  // Keyboard Shortcuts (Cmd+K / Ctrl+K / ESC)
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      modal.classList.contains('open') ? closeModal() : openModal();
    } else if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Perform search query
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        searchResults.innerHTML = `
          <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.875rem;">
            Type keywords to search across all brand guidelines...
          </div>
        `;
        return;
      }

      const index = window.LEVELUP_SEARCH_INDEX || [];
      const matches = index.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.keywords.toLowerCase().includes(query) ||
        item.snippet.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        searchResults.innerHTML = `
          <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.875rem;">
            No guideline sections found for "${query}"
          </div>
        `;
        return;
      }

      // Calculate path prefix depending on current depth
      const pathPrefix = window.location.pathname.includes('/foundation/') ||
                         window.location.pathname.includes('/voice/') ||
                         window.location.pathname.includes('/logo/') ||
                         window.location.pathname.includes('/color/') ||
                         window.location.pathname.includes('/typography/') ||
                         window.location.pathname.includes('/audience/') ||
                         window.location.pathname.includes('/applications/') ||
                         window.location.pathname.includes('/downloads/') ? '../' : './';

      searchResults.innerHTML = matches.map(item => {
        const itemUrl = pathPrefix + item.url.replace(/^\//, '');
        return `
          <a href="${itemUrl}" class="search-result-item" onclick="document.getElementById('searchModal').classList.remove('open')">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.2rem;">
              <span class="search-result-title">${escapeHTML(item.title)}</span>
              <span style="font-family: var(--font-numeral); font-size: 0.7rem; color: var(--blue-orchid); font-weight: 600;">${escapeHTML(item.category)}</span>
            </div>
            <div class="search-result-snippet">${escapeHTML(item.snippet)}</div>
          </a>
        `;
      }).join('');
    });
  }
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
