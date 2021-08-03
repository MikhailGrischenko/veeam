import {IButton} from './Button.interface'
import {IButtonConfig} from './ButtonConfig.interface'
import {BUTTON_TYPE} from './BUTTON_TYPE.enum'
import {PrimaryButton} from './ButtonClasses/PrimaryButton'
import {SecondaryButton} from './ButtonClasses/SecondaryButton'
import {v4 as uuid} from 'uuid'
import {MessageFactory} from '../Message/MessageFactory'

export class ButtonFactory {
  private static config = {
    [BUTTON_TYPE.primary]: PrimaryButton,
    [BUTTON_TYPE.secondary]: SecondaryButton,
  }

  public static create(configFactoryList: Array<IButton>) {
    return configFactoryList.reduce(
      (acc: Array<IButton>, button: IButtonConfig) => {
        const label = button.label || 'Unknown label'
        if (Object.keys(ButtonFactory.config)
          .includes(button.type)) {
          acc.push(
            new ButtonFactory.config[button.type](
              uuid(),
              label,
            ),
          )
        } else {
          MessageFactory.create(
            `[ButtonFactory]: Not valid button type "${button.type}"`)
        }
        return acc
      }, [])
  }
}
