import {IField} from '../Field.interface'
import {FIELD_TYPE} from '../../BaseConfig/FIELD_TYPE.enum'
import {BaseField} from './BaseField'

export class LogicalField extends BaseField implements IField {
  type = FIELD_TYPE.logical

  constructor(id: string, label: string) {
    super(id, label)
    return this
  }
}
