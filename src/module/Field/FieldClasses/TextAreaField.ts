import {IField} from '../Field.interface'
import {FIELD_TYPE} from '../../BaseConfig/FIELD_TYPE.enum'
import {BaseField} from './BaseField'

export class TextAreaField extends BaseField implements IField {
  type = FIELD_TYPE.textArea

  constructor(id: string, label: string) {
    super(id, label)
    return this
  }
}
