function compare(a: string, chaves: Object) {
  let value = 'en-US';
  Object.keys(chaves).forEach(actualitem => {
    a = a.replace(/\W/gi, '').toUpperCase();
    const item = actualitem.replace(/\W/gi, '').toUpperCase();

    let equivalency = 0;
    const minLength = a.length > item.length ? item.length : a.length;
    const maxLength = a.length < item.length ? item.length : a.length;
    for (let i = 0; i < minLength; i += 1) {
      if (a[i] === item[i]) {
        equivalency += 1;
      }
    }

    const weight = equivalency / maxLength;
    if (weight * 100 >= 50) value = actualitem;
  });

  return value || 'en-US';
}
export default compare;
