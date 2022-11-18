(() => {
  const refs = {
    openFranchiseBtn: document.querySelector('[data-franchise-open]'),
    closeFranchiseBtn: document.querySelector('[data-franchise-close]'),
    franchise: document.querySelector('[data-franchise]'),
    body: document.querySelector('body'),
  };

  refs.openFranchiseBtn.addEventListener('click', toggleModal);
  refs.closeFranchiseBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.franchise.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
