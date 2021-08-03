export class DateTime {
  public static currentDate() {
    const date = new Date()
    const month = String(date.getMonth() + 1).length === 1
      ? `0${date.getMonth() + 1}`
      : `${date.getMonth() + 1}`
    const day = String(date.getDate()).length === 1
      ? `0${date.getDate()}`
      : `${date.getDate()}`
    return `${date.getFullYear()}-${month}-${day}`
  }
}
