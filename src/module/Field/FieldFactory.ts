import {IField} from './Field.interface'
import {IFieldConfig} from './FieldConfig.interface'
import {v4 as uuid} from 'uuid'
import {NumericField} from './FieldClasses/NumericField'
import {FIELD_TYPE} from '../BaseConfig/FIELD_TYPE.enum'
import {TextField} from './FieldClasses/TextField'
import {TextAreaField} from './FieldClasses/TextAreaField'
import {LogicalField} from './FieldClasses/LogicalField'
import {EnumField} from './FieldClasses/EnumField'
import {DateField} from './FieldClasses/DateField'
import {MessageFactory} from '../Message/MessageFactory'

export class FieldFactory {
  private static config = {
    [FIELD_TYPE.numeric]: NumericField,
    [FIELD_TYPE.text]: TextField,
    [FIELD_TYPE.textArea]: TextAreaField,
    [FIELD_TYPE.logical]: LogicalField,
    [FIELD_TYPE.enum]: EnumField,
    [FIELD_TYPE.date]: DateField,
  }

  public static create(fieldList: Array<IFieldConfig>): Array<IField> {
    return fieldList.reduce((acc: Array<IField>, field: IFieldConfig) => {
      const label = field.label || 'Unknown label'
      if (Object.keys(FieldFactory.config)
        .includes(field.type)) {
        let payload
        if (field.type === FIELD_TYPE.date && field.defaultValue) {
          payload = field.defaultValue
        }
        if (field.type === FIELD_TYPE.enum && field.radioList && field.radioList.length) {
          payload = field.radioList
        }
        if (field.type === FIELD_TYPE.numeric && field.defaultNumberValue) {
          payload = field.defaultNumberValue
        }
        acc.push(
          new FieldFactory.config[field.type](
            uuid(),
            label,
            payload,
          ),
        )
      } else {
        MessageFactory.create(
          `[FieldFactory]: Not valid field type "${field.type}"`)
      }
      return acc
    }, [])
  }
}
