import {Form} from './Form'
import {IField} from '../Field/Field.interface'
import {IButton} from '../Button/Button.interface'

export interface IFormConfig {
  form: Form
  fields: Array<IField>
  buttons: Array<IButton>
}
