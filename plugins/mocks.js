import mocks from '../mocks';

const MockAdapter = require('axios-mock-adapter');

export default ({ app }) => {
  const mock = new MockAdapter(app.$axios);

  mock.onGet('/common').reply(200, mocks.common.get);
};
