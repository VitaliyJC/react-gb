import {useParams, Navigate} from 'react-router-dom'
import {useSelector} from "react-redux";
import {Form} from '../components/Form/Form'
import {MessageList} from '../components/MessageList/MessageList'
import {ChatList} from '../components/ChatList/ChatList'
import {selectMessage} from "../components/store/messages/selectors";

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

export function ChatsPage() {
  const {chatId} = useParams()
  const messages = useSelector(selectMessage)

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace/>
  }

  return (
    <>
      <IBox sx={{flexGrow: 1}}>
        <IGrid container spacing={0.5}>
          <IGrid item xs={3}>
            <Item><ChatList/></Item>
          </IGrid>
          <IGrid item xs={9}>
            <Item sx={{px: 10}}>
              {
                chatId ? <>
                    <MessageList messages={chatId ? messages[chatId] : []}/>
                    <Form/>
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