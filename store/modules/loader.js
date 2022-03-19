import loadImage from '@/utils/loadImage';

export default {
  namespaced: true,
  state: () => ({
    resources: [],
    loaderIsVisible: false,
    pageResourcesParsingIsEnabled: false,
  }),
  mutations: {
    setLoaderVisibility(state, payload) {
      state.loaderIsVisible = payload;
    },
    setLoaderResources(state, payload = []) {
      state.resources = payload;
    },
    setPageResourcesParsingIsEnabled(state, payload) {
      state.pageResourcesParsingIsEnabled = payload;
    },
  },
  actions: {
    async loadResources({ commit }, images) {
      if (process.server) {
        commit('setPageResourcesParsingIsEnabled', true);
        commit('setLoaderResources', images);
      } else {
        const urls = [...document.querySelectorAll('img')].map((item) => item.currentSrc);

        commit('setPageResourcesParsingIsEnabled', false);
        commit('setLoaderResources', [
          ...images,
          ...urls,
        ]);

        // eslint-disable-next-line no-restricted-syntax
        for (const item of images) {
          // eslint-disable-next-line no-await-in-loop
          await loadImage(item);
        }
      }
    },
  },
};
