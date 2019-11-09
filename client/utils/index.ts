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
  const h = doubleDigit(realTime.getHours());
  const minutes = doubleDigit(realTime.getMinutes());
  const s = doubleDigit(realTime.getSeconds());
  return `${y}-${month}-${d} ${h}:${minutes}:${s}`;
}
