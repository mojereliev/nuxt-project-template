import apiClient from '~/services';

export default {
  getCommonData() {
    return apiClient.get('/common');
  }
};
