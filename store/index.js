import app from './modules/app';
import {commonApi} from '~/services';

export const modules = {
  app,
};

const defaultState = () => ({
  commonData: null,
});

export const mutations = {
  setCommonData(state, payload) {
    state.commonData = payload;
  },
};

export const actions = {
  async nuxtServerInit({dispatch}) { // eslint-disable-line
    await dispatch('fetchCommonData');
  },
  async fetchCommonData({commit}) { // eslint-disable-line
    const {data} = await commonApi.getCommonData();
    commit('setCommonData', data);
  },
};

export const state = defaultState;
