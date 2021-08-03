import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from '@material-ui/core'
import {BASE_CONFIG} from '../../module/BaseConfig/BASE_CONFIG.const'
import {FieldFactory} from '../../module/Field/FieldFactory'
import {ButtonFactory} from '../../module/Button/ButtonFactory'
import {Form} from '../../module/Form/Form'
import {IFormConfig} from '../../module/Form/FormConfig.interface'
import {MessageFactory} from '../../module/Message/MessageFactory'
import {MESSAGE_TYPE} from '../../module/Message/MESSAGE_TYPE.enum'

function VTabConfig(props) {
  const baseConfig = JSON.stringify(BASE_CONFIG, null, 4)
  const [textConfig, setTextConfig] = React.useState(baseConfig)

  function onChangeConfig(event) {
    setTextConfig(event.target.value)
  }

  function apply() {
    try {
      const config = JSON.parse(textConfig)
      const validConfig: IFormConfig = {
        form: new Form(config.form),
        fields: config.fields
          ? FieldFactory.create(config.fields)
          : [],
        buttons: config.buttons
          ? ButtonFactory.create(config.buttons)
          : []
      }
      props.updateConfig(validConfig)
    } catch (error) {
      MessageFactory.create('[JSON parse]: json syntax error ', MESSAGE_TYPE.error)
    }
  }

  return (
    <div className="v-tab-config">
      <Card>
        <CardContent>
          <TextField
            onChange={onChangeConfig}
            value={textConfig}
            minRows={12}
            maxRows={36}
            id="config"
            label="Config:"
            type="test"
            variant="outlined"
            color="primary"
            multiline
            fullWidth
          />
        </CardContent>

        <CardActions>
          <Button
            onClick={apply}
            variant="contained"
            color="primary"
          >
            Apply
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default VTabConfig
