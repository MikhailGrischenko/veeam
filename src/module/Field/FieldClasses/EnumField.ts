import {IField} from '../Field.interface'
import {FIELD_TYPE} from '../../BaseConfig/FIELD_TYPE.enum'
import {BaseField} from './BaseField'

export class EnumField extends BaseField implements IField {
  type = FIELD_TYPE.enum
  radioList?: Array<string> = []

  constructor(id: string, label: string, radioList: Array<string>) {
    super(id, label)
    this.radioList = radioList || []
    return this
  }
}
