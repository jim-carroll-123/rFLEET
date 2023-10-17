import React, { useMemo } from 'react'

import ReactWebChat, { createDirectLine } from 'botframework-webchat'

const BotFrameworkChat = () => {
  const BOT_FRAMEWORK_TOKEN = process.env.NEXT_PUBLIC_BOT_FRAMEWORK_TOKEN

  const directLine = useMemo(() => createDirectLine({ token: BOT_FRAMEWORK_TOKEN }), [])
  const userID = useMemo(() => `user-${Math.random().toString(36).substr(2, 9)}`, [])
  return <ReactWebChat directLine={directLine} userID={userID} />
}

export default BotFrameworkChat
