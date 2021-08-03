import {IButton} from '../Button.interface'
import {BUTTON_TYPE} from '../BUTTON_TYPE.enum'

export class PrimaryButton implements IButton{
  id = ''
  label = 'Unknown label'
  type = BUTTON_TYPE.primary

  constructor(id: string, label: string) {
    this.id = id
    this.label = label
    return this
  }
}
