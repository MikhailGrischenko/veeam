import {MESSAGE_TYPE} from './MESSAGE_TYPE.enum'
import {Message} from './Message'
import { v4 as uuid } from 'uuid';
import messagesState from '../../store/Messages.state'

export class MessageFactory {
  public static create(text: string, type?: MESSAGE_TYPE) {
    const message = new Message(uuid(), text, type)
    messagesState.push(message)
  }
}
