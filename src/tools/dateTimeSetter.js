export function getDateTime () {
  let today = new Date()
  let dd = String(today.getDate()).padStart(2, '0')
  let mm = String(today.getMonth() + 1).padStart(2, '0')
  let yyyy = today.getFullYear()
  let hh = String(today.getHours()).padStart(2, '0')
  let min = String(today.getMinutes()).padStart(2, '0')
  let ss = String(today.getSeconds()).padStart(2, '0')
  today = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + min + ':' + ss
  return today
}
