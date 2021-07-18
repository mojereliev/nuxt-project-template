import throttle from '@/utils/throttle';

const scrollBarHelper = process.browser
  ? require('@/utils/scrollBarHelper')
  : null;

export default function ({ store }) {
  function saveSizes() {
    store.commit('app/setViewportSizeSize', {
      width: window.innerWidth,
      height: window.innerHeight,
    });

    store.commit('app/setScrollBarWidth', scrollBarHelper.getScrollBarWidth());
  }

  const onWindowResize = throttle(() => {
    saveSizes();
  }, 100);

  window.addEventListener('resize', onWindowResize);

  saveSizes();
}
