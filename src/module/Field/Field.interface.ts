import {FIELD_TYPE} from '../BaseConfig/FIELD_TYPE.enum'

export interface IField {
  id: string
  type: FIELD_TYPE
  label: string
  defaultValue?: string
  radioList?: Array<string>
  defaultNumberValue?: number
}
