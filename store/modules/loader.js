export default {
  state: {
    isLoaded: null,
    progress: null,
    images: null
  },
  mutations: {
    setLoadImages(state, payload) {
      state.images = payload;

      setTimeout(() => {
        if (!state.isLoaded) {
          state.progress = 0;
          state.isLoaded = false;
        }
      }, 100);
    },
    setLoaderOpacity(state, payload) {
      state.opacity = payload;
    },
    setLoaderProgress(state, payload) {
      state.progress = payload;
      if (payload >= 100) {
        state.images = null;
        state.isLoaded = true;
        state.opacity = 1;
      } else {
        state.isLoaded = false;
      }
    },
    setLoaderVisibility(state, payload){
      state.isLoaded = !payload;
    }
  }
};
