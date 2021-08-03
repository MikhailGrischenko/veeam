import {MESSAGE_TYPE} from './MESSAGE_TYPE.enum'

export class Message {
  id: string
  text: string
  type: MESSAGE_TYPE

  constructor(id: string, text: string,  type?: MESSAGE_TYPE) {
    this.id = id
    this.text = text
    this.type = type || MESSAGE_TYPE.warning
  }
}
