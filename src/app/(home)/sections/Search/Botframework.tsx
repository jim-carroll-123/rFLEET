import React, { useEffect, useMemo } from 'react'

import ReactWebChat, { createDirectLine } from 'botframework-webchat'
import { createStyleSet } from 'botframework-webchat'

const BotFrameworkChat = () => {
  const BOT_FRAMEWORK_TOKEN = process.env.NEXT_PUBLIC_BOT_FRAMEWORK_TOKEN

  const styleSet = useMemo(
    () =>
      createStyleSet({
        backgroundColor: 'rgba(0, 0, 0, .05)', // background color of the chat window
        primaryFont: 'Arial, sans-serif',
        bubbleBackground: 'rgba(0, 0, 0, .2)',
        bubbleFromUserBackground: 'rgba(0, 0, 0, .2)',
        bubbleBorderRadius: 10,
        bubbleFromUserBorderRadius: 10,
        bubbleTextColor: 'white',
        bubbleFromUserTextColor: 'white',
        sendBoxBackground: 'rgba(0, 0, 0, .2)',
        sendBoxButtonColor: 'white',
        sendBoxTextColor: 'white',
        sendBoxBorderTop: 'rgba(0, 0, 0, .2)',
        suggestedActionTextColor: 'white',
        suggestedActionBackgroundColor: 'rgba(0, 0, 0, .2)',
        suggestedActionBackgroundColorOnHover: 'rgba(0, 0, 0, .8)',
        suggestedActionBorderRadius: 10,
        rootHeight: '90vh'
      }),
    []
  )

  const directLine = useMemo(() => createDirectLine({ token: BOT_FRAMEWORK_TOKEN }), [])
  const userID = useMemo(() => `user-${Math.random().toString(36).substr(2, 9)}`, [])

  return <ReactWebChat directLine={directLine} userID={userID} styleSet={styleSet} />
}

export default BotFrameworkChat
