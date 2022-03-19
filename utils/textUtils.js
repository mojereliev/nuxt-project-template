export const convertTextToChunks = (text) => {
  return text.split(' ')
    .map((item) => `<span class="a-text-chunk">${item}</span>`)
    .join(' ');
};
