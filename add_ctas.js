const fs = require('fs');

const pages = [
  'foundation/index.html',
  'voice/index.html',
  'logo/index.html',
  'color/index.html',
  'typography/index.html',
  'audience/index.html',
  'applications/index.html',
  'downloads/index.html'
];

const ctaSnippet = `      <!-- Top-Right Action CTA -->
      <div class="doc-top-bar">
        <a href="https://drive.google.com/drive/folders/16eII7znDnFO3qGR9hNjNU3g8xGx-0Ao8" target="_blank" rel="noopener" class="btn-download-brochure">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Download Brochure</span>
        </a>
      </div>
`;

pages.forEach(p => {
  const filePath = 'e:/levelup-brand-docs/' + p;
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('btn-download-brochure')) {
    content = content.replace('<main class="doc-main">', '<main class="doc-main">\n' + ctaSnippet);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Added CTA to ' + p);
  }
});
