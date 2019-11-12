function doubleDigit(num: number) {
  if (num >= 10) {
    return num;
  }
  return '0' + num;
}

export function getDateString(time: string) {
  const realTime = new Date(time);
  const y = realTime.getFullYear();
  const month = doubleDigit(realTime.getMonth() + 1);
  const d = doubleDigit(realTime.getDate());
  // const h = doubleDigit(realTime.getHours());
  // const minutes = doubleDigit(realTime.getMinutes());
  // const s = doubleDigit(realTime.getSeconds());
  return `${y}-${month}-${d}`;
}

export function getCookie(cName: string): string {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(cName + '=');
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1;
      let cEnd = document.cookie.indexOf(';', cStart);
      if (cEnd === -1) {
        cEnd = document.cookie.length;
      }
      return unescape(document.cookie.substring(cStart, cEnd));
    }
  }
  return '';
}
