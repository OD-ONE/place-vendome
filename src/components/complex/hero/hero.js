/* begin hero */
export default function initHero() {
  document.addEventListener('DOMContentLoaded', () => {
    const heroVideo = document.querySelector('.hero__video');
    if (!heroVideo) return;

    heroVideo.classList.add('hero__video--show');
  });
}
/* end hero */
