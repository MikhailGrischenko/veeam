export class BaseField {
  id: string
  label = ''

  constructor(id: string, label: string) {
    this.id = id
    this.label = label
    return this
  }
}
