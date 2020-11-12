function isDark(color) {
  // TODO
  // Добавить поддержку сокращенного формата цвета (#fff)

  let luma;

  if (color) {
    const colorResult = color.substring(1); // strip #
    const rgb = parseInt(colorResult, 16); // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xFF; // extract red
    const g = (rgb >> 8) & 0xFF; // extract green
    const b = (rgb >> 0) & 0xFF; // extract blue
    luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  }

  return luma < 200;
}

export { isDark };
