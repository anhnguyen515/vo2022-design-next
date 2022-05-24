export function viewsFormat(views) {
  const THOUSAND = 1000;
  const MILLION = 1000000;

  if (views >= THOUSAND && views < MILLION) {
    return parseFloat(views / THOUSAND).toFixed(1) + "K";
  } else if (views >= MILLION) {
    return parseFloat(views / MILLION).toFixed(1) + "M";
  } else {
    return views;
  }
}
