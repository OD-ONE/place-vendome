/* begin preloader */
if (document.querySelector('.preloader')) {
  let num = 0;
  setInterval(() => {
    if (num <= 100) {
      document.querySelector('.preloader__percent span').innerText = num;
      document.querySelector('.preloader__line-inner').style.width = `${num}%`;
      num += 1;
    } else {
      document.querySelector('.preloader').classList.add('preloader--hidden');
    }
  }, 15);
}
/* end preloader */
