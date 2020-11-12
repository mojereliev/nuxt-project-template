function getCookie(name) {
  const matches = document.cookie.match(new RegExp(
    `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`,
  ));
  return matches ? decodeURIComponent(matches[1]) : null;
}

function setCookie(name, valueOrigin, optionsOrigin) {
  const options = optionsOrigin || {};

  let { expires } = options;

  if (typeof expires === 'number' && expires) {
    const d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = d;
    options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  const value = encodeURIComponent(valueOrigin);

  let updatedCookie = `${name}=${value}`;

  for (const propName in options) { // eslint-disable-line no-restricted-syntax, guard-for-in
    updatedCookie += `; ${propName}`;
    const propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += `=${propValue}`;
    }
  }

  document.cookie = updatedCookie;
}

function deleteCookie(name) {
  setCookie(name, '', {
    expires: -1,
  });
}

module.exports = {
  getCookie,
  setCookie,
  deleteCookie,
};
