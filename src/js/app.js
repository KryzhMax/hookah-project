window.addEventListener('scroll', e => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: '#scroll-wrapper',
  content: '#smooth-content',
  smooth: 1.5,
  smoothTouch: 0.1,
  effects: true,
});

const products = document.querySelectorAll('[data-products]');
const info = document.querySelectorAll('[data-info]');
const aboutUs = document.querySelectorAll('[data-about]');
const contacts = document.querySelectorAll('[data-contacts]');
// console.log(contacts);

function buttonListeners(elem, name) {
  console.log(name);
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', e => {
      smoother.scrollTo(`#${name}`, true);
    });
  }
  return elem;
}
buttonListeners(products, 'products');
buttonListeners(info, 'about');
buttonListeners(aboutUs, 'advantages');
buttonListeners(contacts, 'contacts');
