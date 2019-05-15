import Vue from 'vue';
import moment from 'moment';

Vue.filter('capitalize', string => {
  if (typeof string === 'string') {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
});

Vue.filter('dateFormat', (date, dateFormat = 'MMMM DD, YYYY') => {
  return moment(date).format(dateFormat);
});

Vue.filter('pluralize', (count, label = '') => {
  if (count === 1) {
    return `${count}${label}`;
  }
  return `${count}${label}s`;
});

Vue.filter('getCleanPhoneNumber', string => {
  return string.replace(/ |-|—/gi, '');
});

Vue.filter('normalizeCamel', string => {
  return string.replace(/_/gi, ' ');
});

Vue.filter('removeTags', string => {
  if (typeof document !== 'undefined') {
    const tmp = document.createElement('div');
    tmp.innerHTML = string;
    return tmp.textContent || tmp.innerText || '';
  }
  return string;
});

Vue.filter('stringify', value => {
  return JSON.stringify(value);
});

Vue.filter('toHHMMSS', secondsValue => {
  secondsValue = parseInt(secondsValue, 10); // don't forget the second param
  let hours = Math.floor(secondsValue / 3600);
  let minutes = Math.floor((secondsValue - (hours * 3600)) / 60);
  let seconds = secondsValue - (hours * 3600) - (minutes * 60);

  if (hours < 10) {hours = `0${hours}`;}
  if (seconds < 10) {seconds = `0${seconds}`;}

  if (hours === '00') {
    return `${minutes}:${seconds}`;
  }

  if (minutes < 10) {minutes = `0${minutes}`;}

  return `${hours}:${minutes}:${seconds}`;
});
