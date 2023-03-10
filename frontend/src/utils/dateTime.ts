export const formatToInputDate = (date: Date) => {
  const year = date.getFullYear()
  const month =
    date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  return `${year}-${month}-${day}`
}
export const formatToInputTime = (date: Date) => {
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minute =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  return `${hour}:${minute}`
}