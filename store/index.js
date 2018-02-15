import Vuex from 'vuex';

import app from './modules/app';
import loader from './modules/loader';

const scrollBarHelper = process.browser
  ? require('assets/helpers/scrollBarHelper.js')
  : null;

const createStore = () => {
  return new Vuex.Store({
    modules: {
      app,
      loader
    },
    state: {
      commonData: null,
      cases: null,
      activeCase: null,
      scrollBar: {
        width: scrollBarHelper ? scrollBarHelper.getScrollBarWidth() : null
      },
      mobileButtonActivity: true
    },
    mutations: {
      setCommonData(state, payload) {
        state.commonData = payload;
      },
      setCasesData(state, payload) {
        state.cases = payload;
      }
    },
    actions: {
      async nuxtServerInit({dispatch}, {app}) { // eslint-disable-line
        // await dispatch('fetchCasesData', app);
        await dispatch('fetchCommonData', app);
      },
      async fetchCasesData({commit}, app) { // eslint-disable-line
        const {data} = await app.$axios.get('cases');
        commit('setCasesData', data.cases);
      },
      async fetchCommonData({commit}, app) { // eslint-disable-line
        const {data} = await app.$axios.get('common');

        commit('setCommonData', data);
      }
    }
  });
};

export default createStore;
