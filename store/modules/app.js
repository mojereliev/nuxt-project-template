const scrollBarHelper = process.browser
  ? require('@/utils/scrollBarHelper')
  : null;

export default {
  namespaced: true,
  state: () => {
    return {
      fontSize: 0,
      isLoad: null,
      isReady: null,
      viewportSize: {
        width: null,
        height: null,
      },
      uiColor: 'black',
      scrollBar: {
        width: scrollBarHelper ? scrollBarHelper.getScrollBarWidth() : null,
      },
    };
  },
  mutations: {
    setAppReady(state, payload) {
      state.isReady = payload;
    },
    setAppLoad(state, payload) {
      state.isLoad = payload;
    },
    setFontSize(state, payload) {
      state.fontSize = payload;
    },
    setViewportSizeSize(state, payload) {
      state.viewportSize = payload;
    },
    setUiColor(state, payload) {
      state.uiColor = payload;
    },
  },
};
