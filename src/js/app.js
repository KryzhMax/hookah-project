let debounceTimeout;
const home = document.querySelector('[data-home]');

window.addEventListener('scroll', e => {
  debounceTimeout = setTimeout(() => {
    // document.body.classList.toggle('scrolling', window.scrollY > 0);
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
  }, 10);
  clearTimeout(debounceTimeout);

  if (window.scrollY > 200) {
    home.style.display = 'block';
  } else {
    home.style.display = 'none';
  }
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: '#scroll-wrapper',
  content: '#smooth-content',
  smooth: 1,
  smoothTouch: 0.3,
  effects: true,
});

const products = document.querySelectorAll('[data-products]');
const advantages = document.querySelectorAll('[data-info]');
const about = document.querySelectorAll('[data-about]');
const contacts = document.querySelectorAll('[data-contacts]');
const links = [products, advantages, about, contacts];

function buttonListeners(name) {
  links.forEach(link =>
    link.addEventListener('click', e => {
      smoother.scrollTo(`#${name}`, true);
      buttonListeners(`#${link}`);
    })
  );
  return links;
}

function scrollTo() {
  smoother.scrollTo(`#home`, true);
}

home.addEventListener('click', scrollTo);

// buttonListeners('products');
// buttonListeners('about');
// buttonListeners('advantages');
// buttonListeners('contacts');
// buttonListeners('home');

// -------Version 2

// function smoothScroll(target, duration) {
//   var target = document.querySelector(target);
//   var targetPosition = target.getBoundingClientRect().top;
//   var startPosition = window.pageYOffset;
//   var distance = targetPosition - startPosition;
//   var startTime = null;

//   function animation(currentTime) {
//     if (startTime === null) startTime = currentTime;
//     var timeElapsed = currentTime - startTime;
//     var run = ease(timeElapsed, startPosition, distance, duration);
//     window.scrollTo(0, run);
//     if (timeElapsed < duration) requestAnimationFrame(animation);
//   }

//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t + b;
//     t--;
//     return (-c / 2) * (t * (t - 2) - 1) + b;
//   }

//   requestAnimationFrame(animation);
// }

// // Smooth scroll for navigation menu
// var navLinks = document.querySelectorAll('nav a');

// navLinks.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     var target = this.getAttribute('href');
//     var duration = 1000;
//     smoothScroll(target, duration);
//   });
// });
