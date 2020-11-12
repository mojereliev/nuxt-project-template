import Vue from 'vue';
import { TweenLite } from 'gsap';

Vue.directive('focus', {
  inserted(el) {
    el.getElementsByTagName('INPUT')[0].focus();
  },
});

Vue.directive('anchor', {
  bind(el, binding) {
    const scrollElement = document.querySelector('.page__container');

    el.addEventListener('click', () => {
      const hashElement = document.querySelector(binding.value);

      if (hashElement) {
        const scrollTop = hashElement.getBoundingClientRect().top + scrollElement.scrollTop;
        TweenLite.to(scrollElement, 0.5, { scrollTo: scrollTop });
      }
    });
  },
});
