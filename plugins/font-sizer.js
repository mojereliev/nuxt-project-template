import throttle from '@/utils/throttle';

const platformDetect = process.browser
  ? require('@/utils/platformDetect')
  : null;

const isMobile = platformDetect?.detectMobile.isMobile || platformDetect?.detectTablet.isTablet;

export default function ({ store }) {
  const props = {
    target: document.querySelector('html'),
    bp: {
      sm: {
        width: 375,
        height: 640,
        fontSize: 1,
      },
      lg: {
        width: 1440,
        height: 900,
        fontSize: 1,
      },
      xl: {
        width: 1440,
        height: 900,
        fontSize: 1,
      },
    },
  };

  function update(bp = 'lg') {
    console.log('> Plugin: font-sizer -> bp:', bp);

    const heightSuccess = isMobile
      ? window.outerHeight
      : window.innerHeight;

    const widthSuccess = isMobile
      ? window.outerWidth
      : window.innerWidth;

    const contentBoxWidth = props.bp[bp].width;
    const contentBoxHeight = props.bp[bp].height;
    const baseFontSize = props.bp[bp].fontSize;

    const differentHeight = heightSuccess - contentBoxHeight;
    const differentWidth = widthSuccess - contentBoxWidth;

    let scale;

    if (widthSuccess > contentBoxWidth && heightSuccess > contentBoxHeight) {
      if (widthSuccess / heightSuccess <= contentBoxWidth / contentBoxHeight) {
        scale = widthSuccess / contentBoxWidth;
      } else {
        scale = heightSuccess / contentBoxHeight;
      }
    } else {
      if (differentHeight < 0) {
        scale = (contentBoxHeight - Math.abs(differentHeight)) / contentBoxHeight;
        if (scale < 0.3) {
          scale = 0.3;
        }
      } else {
        scale = 1;
      }

      if (differentWidth < 0) {
        const scallWidth = (contentBoxWidth - Math.abs(differentWidth)) / contentBoxWidth;

        if (scallWidth < scale) {
          scale = scallWidth;
        }
        if (scale < 0.3) {
          scale = 0.3;
        }
      }
    }

    const fontSize = scale * baseFontSize;
    // fontSize = fontSize > baseFontSize ? baseFontSize : fontSize;

    props.target.style.fontSize = `${fontSize}px`;

    return fontSize;
  }

  function saveSizes() {
    store.commit('app/setFontSize', update(window.$nuxt?.$mq));
  }

  const onWindowResize = throttle(() => {
    saveSizes();
  }, 100);

  window.addEventListener('resize', onWindowResize);

  setTimeout(() => {
    saveSizes();
  }, 0);
}
