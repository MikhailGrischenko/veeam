import {IField} from '../Field.interface'
import {FIELD_TYPE} from '../../BaseConfig/FIELD_TYPE.enum'
import {DateTime} from '../../DateTime/DateTime'
import {BaseField} from './BaseField'

export class DateField extends BaseField implements IField {
  type = FIELD_TYPE.date
  defaultValue?: string

  constructor(id: string, label: string, defaultValue) {
    super(id, label)
    this.defaultValue = defaultValue || DateTime.currentDate()
    return this
  }
}
