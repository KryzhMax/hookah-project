// (() => {
//   const refs = {
//     openFranchiseBtn: document.querySelectorAll('[data-franchise-open]'),
//     closeFranchiseBtn: document.querySelector('[data-franchise-close]'),
//     franchise: document.querySelector('[data-franchise]'),
//     body: document.querySelector('body'),
//   };

//   // refs.openFranchiseBtn.addEventListener('click', toggleModal);
//   refs.closeFranchiseBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.franchise.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }

//   function modalListeners(elem) {
//     for (let i = 0; i < elem.length; i++) {
//       elem[i].addEventListener('click', toggleModal);
//     }
//     return refs.openFranchiseBtn;
//   }
// })();

const refs = {
  openFranchiseBtn: document.querySelectorAll('[data-franchise-open]'),
  closeFranchiseBtn: document.querySelector('[data-franchise-close]'),
  franchise: document.querySelector('[data-franchise]'),
  body: document.querySelector('body'),
};

refs.closeFranchiseBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.franchise.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

function modalListeners(elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', toggleModal);
  }
  return refs.openFranchiseBtn;
}

modalListeners(refs.openFranchiseBtn);
