import React, { useMemo } from 'react'

import ReactWebChat, { createDirectLine } from 'botframework-webchat'

const BotFrameworkChat = () => {
  const BOT_FRAMEWORK_TOKEN = process.env.REACT_APP_BOT_FRAMEWORK_TOKEN

  const directLine = useMemo(() => createDirectLine({ token: BOT_FRAMEWORK_TOKEN }), [])

  return <ReactWebChat directLine={directLine} userID="YOUR_USER_ID" />
}

export default BotFrameworkChat
