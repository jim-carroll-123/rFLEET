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
        botAvatarImage:
          'https://docs.microsoft.com/en-us/azure/bot-service/v4sdk/media/logo_bot.svg?view=azure-bot-service-4.0',
        userAvatarInitials: 'WC',
        botAvatarInitials: 'BF',
        userAvatarImage: 'https://github.com/compulim.png?size=64'
      }),
    []
  )

  const directLine = useMemo(() => createDirectLine({ token: BOT_FRAMEWORK_TOKEN }), [])
  const userID = useMemo(() => `user-${Math.random().toString(36).substr(2, 9)}`, [])

  return <ReactWebChat directLine={directLine} userID={userID} styleSet={styleSet} />
}

export default BotFrameworkChat
