document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Copy BibTeX
  const copyBtn = document.getElementById('copy-btn');
  const bibtexCode = document.getElementById('bibtex-code');
  if (copyBtn && bibtexCode) {
    copyBtn.addEventListener('click', async () => {
      const text = bibtexCode.innerText.trim();
      try {
        await navigator.clipboard.writeText(text);
        const originalContent = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5"></i><span>Copied!</span>';
        if (typeof lucide !== 'undefined') lucide.createIcons();
        copyBtn.classList.add('bg-green-600/20', 'border-green-500/30');
        setTimeout(() => {
          copyBtn.innerHTML = originalContent;
          if (typeof lucide !== 'undefined') lucide.createIcons();
          copyBtn.classList.remove('bg-green-600/20', 'border-green-500/30');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    });
  }
});
