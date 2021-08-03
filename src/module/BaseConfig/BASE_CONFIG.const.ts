import {FIELD_TYPE} from './FIELD_TYPE.enum'
import {BUTTON_TYPE} from '../Button/BUTTON_TYPE.enum'

export const BASE_CONFIG = {
  form: {
    title: 'Form title'
  },
  fields: [
    {
      type: FIELD_TYPE.numeric,
      label: 'Numeric'
    },
    {
      type: FIELD_TYPE.logical,
      label: 'Logical'
    },
    {
      type: FIELD_TYPE.text,
      label: 'Text'
    },
    {
      type: FIELD_TYPE.textArea,
      label: 'Text area'
    },
    {
      type: FIELD_TYPE.date,
      label: 'Date'
    },
    {
      type: FIELD_TYPE.enum,
      label: 'Enum',
      radioList: [
        'One',
        'Two',
        'Three'
      ]
    },
  ],
  buttons: [
    {
      label: 'Ok',
      type: BUTTON_TYPE.primary
    },
    {
      label: 'Not ok',
      type: BUTTON_TYPE.secondary
    },
  ]
}
