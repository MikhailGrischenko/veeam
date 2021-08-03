import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

function VAppBar() {
  return (
    <div className="VAppBar">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" noWrap>
            Veeam
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default VAppBar
