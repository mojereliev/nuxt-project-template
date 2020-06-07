const MockAdapter = require('axios-mock-adapter');

import mocks from '../mocks';

export default ({app}) => {
  const mock = new MockAdapter(app.$axios);

  mock.onGet('/common').reply(200, mocks.common.get);
};
