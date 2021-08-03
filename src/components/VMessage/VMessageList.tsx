import React from 'react'
import messagesState from '../../store/Messages.state'
import {observer} from 'mobx-react-lite'
import './VMessageList.css'
import {useSnackbar, withSnackbar} from 'notistack'
import CONFIG from '../../config/CONFIG'

const VMessageList = observer(() => {
  const {enqueueSnackbar} = useSnackbar()


  return (
    <div className="v-message-list">
      {messagesState.messageList.map(message =>
        enqueueSnackbar(message.text, {
          variant: message.type,
          preventDuplicate: true,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          autoHideDuration: CONFIG.messageDuration,
        }),
      )}
    </div>
  )
})

export default withSnackbar(VMessageList)
