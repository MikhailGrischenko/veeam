import React from 'react'
import './VTabPanel.css'
import {Box} from '@material-ui/core'

function VTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      className="v-tab-panel"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default VTabPanel
