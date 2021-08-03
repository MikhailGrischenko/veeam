import React from 'react'
import './App.css'
import {Box, Card, Tab, Tabs, Toolbar} from '@material-ui/core'
import VAppBar from './components/VAppBar/VAppBar'
import VTabPanel from './components/VTabPanel/VTabPanel'
import VTabConfig from './components/VTabConfig/VTabConfig'
import VTabResult from './components/VTabResult/VTabResult'
import {ThemeProvider} from '@material-ui/core/styles'
import {theme} from './module/Theme/Theme'
import VHelpArea from './components/VHelpArea/VHelpArea'
import VMessageList from './components/VMessage/VMessageList'
import {SnackbarProvider} from 'notistack'


function App() {
  const [activeTabId, setActiveTabId] = React.useState(0)
  const [formConfig, setFormConfig] = React.useState(null)

  function updateFormConfig(payload) {
    setFormConfig(payload)
  }

  function handleChange(event, value) {
    setActiveTabId(value)
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={5}
        >
          <VMessageList/>
          <Box>
            <VAppBar/>
            <Card>
              <Toolbar variant="dense">
                <Tabs
                  value={activeTabId}
                  onChange={handleChange}
                  aria-label="simple tabs"
                  indicatorColor="secondary"
                  textColor="secondary"
                >
                  <Tab
                    label="Config"
                    {...a11yProps(0)}
                  />
                  <Tab
                    label="Result"
                    disabled={!formConfig}
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Toolbar>
              <VTabPanel
                className="v-tab-panel v-tab-panel__two-panes"
                value={activeTabId}
                index={0}
              >
                <div className="v-tab-panel__left">
                  <VTabConfig
                    updateConfig={updateFormConfig}
                  />
                </div>
                <div className="v-tab-panel__right">
                  <VHelpArea/>
                </div>
              </VTabPanel>
              <VTabPanel
                className="v-tab-panel"
                value={activeTabId}
                index={1}
              >
                <VTabResult
                  formConfig={formConfig}
                />
              </VTabPanel>
            </Card>
          </Box>
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
