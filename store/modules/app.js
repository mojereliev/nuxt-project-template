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
      header: {
        isVisible: true,
      },
      uiColor: 'black',
      scrollBar: {
        width: scrollBarHelper ? scrollBarHelper.getScrollBarWidth() : null,
      },
    };
  },
  getters: {
    getHeaderVisibility: (state) => {
      return state.header.isVisible;
    },
    getScrollBarWidth: (state) => {
      return state.scrollBar.width;
    },
    getViewportWidth: (state) => {
      return state.viewportSize.width;
    },
  },
  mutations: {
    setAppReady(state, payload) {
      state.isReady = payload;
    },
    setAppLoad(state, payload) {
      state.isLoad = payload;
    },
    setHeaderVisibility(state, payload = true) {
      state.header.isVisible = payload;
    },
    setFontSize(state, payload) {
      console.log('> Store: app -> setFontSize:', payload);
      state.fontSize = payload;
    },
    setScrollBarWidth(state, payload) {
      state.scrollBar.width = payload;
    },
    setViewportSize(state, payload) {
      console.log('> Store: app -> setViewportSize:', payload);
      state.viewportSize = payload;
    },
    setUiColor(state, payload) {
      state.uiColor = payload;
    },
  },
};
