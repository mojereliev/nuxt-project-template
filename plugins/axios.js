import {setClient} from '~/services';

export default function ({$axios}) {
  setClient($axios);

  $axios.onError(error => {
    console.log(error);
    return Promise.reject(error);
  });
}
