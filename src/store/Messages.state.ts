import {makeAutoObservable} from 'mobx'
import {Message} from '../module/Message/Message'

class MessagesState {
  messageList: Array<Message> = []

  constructor() {
    makeAutoObservable(this)
  }

  push(item: Message) {
    this.messageList.push(item)
  }
  remove(id: Message['id']) {
    this.messageList = this.messageList.filter(item => item.id !== id)
  }
}

export default new MessagesState()
