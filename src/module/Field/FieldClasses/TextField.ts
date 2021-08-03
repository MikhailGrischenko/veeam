import {FIELD_TYPE} from '../../BaseConfig/FIELD_TYPE.enum'
import {IField} from '../Field.interface'
import {BaseField} from './BaseField'

export class TextField extends BaseField implements IField{
  type = FIELD_TYPE.text

  constructor(id: string, label: string) {
    super(id, label)
    return this
  }
}
