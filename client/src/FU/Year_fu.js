

export function loopYear() {
  var start_year = new Date().getFullYear();
  const arrYear = [];
  for (let i = start_year; i > start_year - 60; i--) {
      var obj={}
      obj['numberYear'] = i
      obj['valueYear'] = i
      arrYear.push(obj)
  }
  return arrYear
}
