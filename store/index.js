import { commonApi } from '@/services';

import app from './modules/app';
import loader from './modules/loader';

export const modules = {
  app,
  loader,
};

const defaultState = () => ({
  commonData: null,
});

export const getters = {
  getSocials: (state) => {
    return state.commonData?.socials;
  },
  getContacts: (state) => {
    return state.commonData?.contacts;
  },
  getUIColor: (state) => {
    return state.svgColorSet.color;
  },
};

export const mutations = {
  setCommonData(state, payload) {
    state.commonData = payload;
  },
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('fetchCommonData');
  },
  async fetchCommonData({ commit }) {
    const { data } = await commonApi.getCommonData();
    commit('setCommonData', data);
  },
};

export const state = defaultState;
