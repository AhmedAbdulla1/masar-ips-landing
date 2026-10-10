/**
 * مسار - IPS | Logic & Smart Device Detection
 * Domain: masar.tranex.site
 */

document.addEventListener('DOMContentLoaded', () => {
  const appleBtn = document.getElementById('appleStoreBtn');
  const googleBtn = document.getElementById('googlePlayBtn');
  const shareBtn = document.getElementById('shareBtn');
  const qrToggleBtn = document.getElementById('qrToggleBtn');
  const qrModal = document.getElementById('qrModal');
  const closeQrBtn = document.getElementById('closeQrBtn');
  const qrBackdrop = document.getElementById('qrBackdrop');
  const toast = document.getElementById('toast');

  const canonicalUrl = 'https://masar.tranex.site';

  // 1. Detect User Operating System
  function detectOS() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) || 
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isAndroid = /android/i.test(userAgent);

    if (isIOS) {
      if (appleBtn) appleBtn.classList.add('is-recommended');
    } else if (isAndroid) {
      if (googleBtn) googleBtn.classList.add('is-recommended');
    }
  }

  detectOS();

  // 2. Share / Copy Link Handler
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const shareData = {
        title: 'مسار - IPS | مجلس النواب المصري',
        text: 'تطبيق الملاحة والتوجيه الذكي داخل مجلس النواب المصري',
        url: canonicalUrl
      };

      if (navigator.share && /mobile/i.test(navigator.userAgent)) {
        try {
          await navigator.share(shareData);
          return;
        } catch (err) {
          if (err.name !== 'AbortError') {
            copyToClipboard(canonicalUrl);
          }
        }
      } else {
        copyToClipboard(canonicalUrl);
      }
    });
  }

  // 3. Clipboard copy with toast notification
  async function copyToClipboard(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      showToast('تم نسخ الرابط بنجاح!');
    } catch (err) {
      showToast('الرابط: ' + text);
    }
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2600);
  }

  // 4. QR Code Modal Dialog Handlers
  function openQrModal() {
    if (!qrModal) return;
    qrModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeQrModal() {
    if (!qrModal) return;
    qrModal.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (qrToggleBtn) {
    qrToggleBtn.addEventListener('click', openQrModal);
  }

  if (closeQrBtn) {
    closeQrBtn.addEventListener('click', closeQrModal);
  }

  if (qrBackdrop) {
    qrBackdrop.addEventListener('click', closeQrModal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && qrModal && qrModal.classList.contains('show')) {
      closeQrModal();
    }
  });
});
