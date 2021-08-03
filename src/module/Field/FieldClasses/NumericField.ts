import {IField} from '../Field.interface'
import {FIELD_TYPE} from '../../BaseConfig/FIELD_TYPE.enum'
import {BaseField} from './BaseField'

export class NumericField extends  BaseField implements IField {
  type = FIELD_TYPE.numeric
  defaultNumberValue?: number = 0

  constructor(id: string, label: string, defaultNumberValue: number) {
    super(id, label)
    this.defaultNumberValue = defaultNumberValue
    return this
  }
}
