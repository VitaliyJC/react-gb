import {useEffect} from 'react'
import {useParams, Navigate} from 'react-router-dom'

import {Form} from '../components/Form/Form'
import {MessageList} from '../components/MessageList/MessageList'
import {ChatList} from '../components/ChatList/ChatList'

import {AUTHOR} from '../constants'
import IBox from "@mui/material/Box";
import {styled} from '@mui/material/styles';
import IPaper from '@mui/material/Paper';
import IGrid from '@mui/material/Grid';
import ITypography from "@mui/material/Typography";


const Item = styled(IPaper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function ChatsPage({onAddChat, onAddMessage, messages, chats}) {
  const {chatId} = useParams()

  useEffect(() => {
    if (chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author === AUTHOR.user
    ) {
      const timeout = setTimeout(() => {
        onAddMessage(chatId, {
          author: AUTHOR.bot,
          text: 'Im BOT'
        })
      }, 1500)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [chatId, messages])

  const handleAddMessage = (massage) => {
    if (chatId) {
      onAddMessage(chatId, massage)
    }
  }

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace/>
  }

  return (
    <>
      <IBox sx={{flexGrow: 1}}>
        <IGrid container spacing={0.5}>
          <IGrid item xs={3}>
            <Item><ChatList chats={chats} onAddChat={onAddChat} /></Item>
          </IGrid>
          <IGrid item xs={9}>
            <Item sx={{px: 10}}>
              {
                chatId ? <>
                  <MessageList messages={chatId ? messages[chatId] : []}/>
                  <Form addMessage={handleAddMessage}/>
                  </> :
                  <ITypography height='90vh' variant="h4">
                    Выберите чат
                  </ITypography>
              }
            </Item>
          </IGrid>
        </IGrid>
      </IBox>
    </>
  )
}