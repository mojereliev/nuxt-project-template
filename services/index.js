let client;

export function setClient(newclient) {
  client = newclient;
}

// Request helpers
const reqMethods = [
  'request', 'delete', 'get', 'head', 'options', // url, config
  'post', 'put', 'patch', // url, data, config
];

const service = {};

reqMethods.forEach((method) => {
  service[method] = function () {
    if (!client) { throw new Error('apiClient not installed'); }
    return client[method].apply(null, arguments); // eslint-disable-line prefer-rest-params
  };
});

export default service;

export { default as commonApi } from './common'; // eslint-disable-line import/no-cycle
