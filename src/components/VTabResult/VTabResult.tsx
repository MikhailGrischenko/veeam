import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField, Typography,
} from '@material-ui/core'
import {IField} from '../../module/Field/Field.interface'
import {IButton} from '../../module/Button/Button.interface'
import {FIELD_TYPE} from '../../module/BaseConfig/FIELD_TYPE.enum'
import './VTabresult.css'
import {DateField} from '../../module/Field/FieldClasses/DateField'
import {TextAreaField} from '../../module/Field/FieldClasses/TextAreaField'
import {TextField as VTextField} from '../../module/Field/FieldClasses/TextField'
import {NumericField} from '../../module/Field/FieldClasses/NumericField'
import {LogicalField} from '../../module/Field/FieldClasses/LogicalField'
import {EnumField} from '../../module/Field/FieldClasses/EnumField'

function VTabResult(props) {
  const fieldRender = {
    [FIELD_TYPE.numeric]: getFieldNumericRender,
    [FIELD_TYPE.text]: getFieldTextRender,
    [FIELD_TYPE.textArea]: getFieldTextareaRender,
    [FIELD_TYPE.logical]: getFieldCheckboxRender,
    [FIELD_TYPE.date]: getFieldDateRender,
    [FIELD_TYPE.enum]: getFieldRadioRender,
  }

  function getFieldRender(filedConfig: IField) {
    if (
      Object.keys(fieldRender)
        .includes(filedConfig.type)
    ) {
      return fieldRender[filedConfig.type](filedConfig)
    }
    return (
      <div
        key='Unknown'
      >Unknown field type or format</div>
    )
  }

  function getFieldNumericRender(filedConfig: NumericField) {
    return (
      <FormControlLabel
        key={filedConfig.id}
        label={filedConfig.label}
        labelPlacement="start"
        control={
          <TextField
            placeholder="field text"
            id={filedConfig.id}
            label={filedConfig.label}
            defaultValue={filedConfig.defaultNumberValue}
            type="number"
            variant="outlined"
            color="primary"
          />
        }
      />
    )
  }

  function getFieldTextRender(filedConfig: VTextField) {
    return (
      <FormControlLabel
        key={filedConfig.id}
        label={filedConfig.label}
        labelPlacement="start"
        control={
          <TextField
            placeholder="field text"
            id={filedConfig.id}
            label={filedConfig.label}
            type="test"
            variant="outlined"
            color="primary"
          />
        }
      />
    )
  }

  function getFieldTextareaRender(filedConfig: TextAreaField) {
    return (
      <FormControlLabel
        key={filedConfig.id}
        label={filedConfig.label}
        labelPlacement="start"
        control={
          <TextField
            minRows={3}
            maxRows={3}
            placeholder="field text area"
            id={filedConfig.id}
            label={filedConfig.label}
            type="test"
            variant="outlined"
            color="primary"
            multiline
          />
        }
      />

    )
  }

  function getFieldCheckboxRender(filedConfig: LogicalField) {
    return (
      <FormControlLabel
        key={filedConfig.id}
        label={filedConfig.label}
        labelPlacement="start"
        control={
          <Checkbox
            color="primary"
          />
        }
      />
    )
  }

  function getFieldDateRender(filedConfig: DateField) {
    return (
      <FormControlLabel
        key={filedConfig.id}
        label={filedConfig.label}
        labelPlacement="start"
        control={
          <TextField
            id={filedConfig.id}
            type="date"
            defaultValue={filedConfig.defaultValue}
          />
        }
      />
    )
  }

  function getFieldRadioRender(filedConfig: EnumField) {
    return (
      <FormControlLabel
        key={filedConfig.id}
        label={filedConfig.label}
        labelPlacement="start"
        control={
          filedConfig.radioList.length ?
          <RadioGroup
            row
            defaultValue={filedConfig.radioList[0]}
          >
            {
              filedConfig.radioList.map(item => {
                return (
                  <FormControlLabel
                    label={item}
                    value={item}
                    labelPlacement="top"
                    control={
                      <Radio
                        color='primary'
                      />
                    }
                  />
                )
              })
            }
          </RadioGroup>
            : <Typography>Values for radio button not specified</Typography>
        }
      />
    )
  }

  function getButtonRender(buttonConfig: IButton) {
    return (
      <Button
        key={buttonConfig.id}
        variant="contained"
        color={buttonConfig.type}
      >
        {buttonConfig.label}
      </Button>
    )
  }

  return (
    <div className="v-tab-result">
      <Card>
        <CardHeader
          title={props.formConfig.form.title}
        />
        <CardContent>
          {
            props.formConfig.fields.map((fieldConfig: IField) => {
              return (
                <div
                  className="v-teb-result__field"
                  key={fieldConfig.id}
                >
                  {getFieldRender(fieldConfig)}
                </div>
              )
            })
          }
        </CardContent>

        <CardActions>
          {
            props.formConfig.buttons.map(button => {
              return getButtonRender(button)
            })
          }
        </CardActions>
      </Card>
    </div>
  )
}

export default VTabResult
