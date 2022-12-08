import {useEffect, useState} from "react";
import {Form} from "./components/Form/Form";
import {MessageList} from "./components/MessageList/MessageList";
import {AUTHOR} from "./constants";
import {Chat} from "./components/Chats/Chat";

import {styled} from '@mui/material/styles';
import IBox from '@mui/material/Box';
import IPaper from '@mui/material/Paper';
import IGrid from '@mui/material/Grid';
import IContainer from '@mui/material/Container';
import ICssBaseline from '@mui/material/CssBaseline';
import ITypography from '@mui/material/Typography';


const Item = styled(IPaper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function App() {
  const [messages, setMessages] = useState([])

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage])
  }

  useEffect(() => {
    if (messages.length > 0 && messages.slice(-1)[0].author !== AUTHOR.bot) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          text: 'Hello, your message has been received!'
        })
      }, 1500)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messages])

  return (
    <>
      <ICssBaseline>
        <IContainer >
          <IBox sx={{flexGrow: 1}}>
            <IGrid container spacing={0.5}>
              <IGrid item xs={12}>
                <Item>
                  <ITypography variant="h3">
                    Welcome to chat!
                  </ITypography>
                </Item>
              </IGrid>
              <IGrid item xs={3}>
                <Item><Chat/></Item>
              </IGrid>
              <IGrid item xs={9}>
                <Item sx={{px:10}}>
                  <MessageList messages={messages}/>
                  <Form addMessage={addMessage}/>
                </Item>
              </IGrid>
            </IGrid>
          </IBox>
        </IContainer>
      </ICssBaseline>


    </>
  )
}