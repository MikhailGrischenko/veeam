import React from 'react'
import {
  Accordion, AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  CardHeader, Typography,
} from '@material-ui/core'
import {HELP_AREA_ROOT_CONTENT} from './VHelpAreaContetn.const'
import './VHelpArea.css'

function VHelpArea() {

  function renderRootItem(item) {
    return (
      <Accordion
        key={item.title}
      >
        <AccordionSummary>
          {item.title}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {item.description}
          </Typography>
          {
            item.items.map(subItem => {
              return renderItem(subItem)
            })
          }
        </AccordionDetails>
      </Accordion>
    )
  }

  function renderItem(subItem) {
    return (
      <Accordion
        key={subItem.fieldName}
      >
        <AccordionSummary>
          {subItem.fieldName}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{subItem.description}</Typography>
        </AccordionDetails>
      </Accordion>
    )
  }

  return (
    <div className="v-help-area">
      <Card>
        <CardHeader
          title="Help config"
        />
        <CardContent>
          {
            HELP_AREA_ROOT_CONTENT.map(item => {
              return renderRootItem(item)
            })
          }
        </CardContent>
      </Card>
    </div>
  )
}

export default VHelpArea
