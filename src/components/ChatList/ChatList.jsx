import {useState} from "react"
import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {addChat} from "../store/messages/actions";

import {push, set, remove} from "firebase/database";
import {messagesRef, getChatById, getMessageListById} from "../../services/firebase";

import IList from '@mui/material/List';
import IListItem from '@mui/material/ListItem';
import IListItemButton from '@mui/material/ListItemButton';
import IListItemIcon from '@mui/material/ListItemIcon';
import IListItemText from '@mui/material/ListItemText';
import IDivider from '@mui/material/Divider';
import ITelegramIcon from '@mui/icons-material/Telegram';
import IDeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IUnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import ITypography from '@mui/material/Typography';
import ITextField from '@mui/material/TextField';
import ISendIcon from "@mui/icons-material/Send";
import IButton from '@mui/material/Button';
import IClearIcon from '@mui/icons-material/Clear';

export function ChatList({messagesDB, chats}) {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addChat(value))

    set(messagesRef, {
      ...messagesDB,
      [value]: {
        name: value
      }
    })

    push(getMessageListById(value), {
      text: 'Welcome to chat',
      author: 'Admin',
    });

    setValue('');
  }

  const handleDeleteChat = (chatId) => {
    remove(getChatById(chatId));
  }

  return (
    <>
      <nav aria-label="main mailbox folders">
        <IList>
          {chats.map((chat) => (
            <IListItem disablePadding key={chat.name}>
              <IListItemButton>
                <IListItemIcon>
                  <ITelegramIcon/>
                </IListItemIcon>
                <Link to={`/chats/${chat.name}`}>
                  {chat.name}
                </Link>
              </IListItemButton>
              <IListItemButton>
                <IListItemIcon>
                  <IClearIcon onClick={() => dispatch(handleDeleteChat(chat.name))}/>
                </IListItemIcon>
              </IListItemButton>
              </IListItem>
            ))}
        </IList>
      </nav>

      <IDivider/>
      <nav aria-label="secondary mailbox folders">
        <IList>
          <IListItem disablePadding>
            <IListItemButton>
              <IListItemIcon>
                <IDeleteForeverIcon/>
              </IListItemIcon>
              <IListItemText primary="Trash"/>
            </IListItemButton>
          </IListItem>
          <IListItem disablePadding>
            <IListItemButton component="a" href="#simple-list">
              <IListItemIcon>
                <IUnsubscribeIcon/>
              </IListItemIcon>
              <IListItemText primary="Spam"/>
            </IListItemButton>
          </IListItem>
        </IList>
      </nav>

      <ITypography variant="h4">ChatList</ITypography>
      <form onSubmit={handleSubmit}>
        <ITextField
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="standard-basic"
          label="Enter chat name"
          variant="standard"
          fullWidth
        />
        <IButton
          variant="contained"
          color='success'
          size='small'
          type='submit'
          endIcon={<ISendIcon/>}
          sx={{my: 2}}
        >
          Create Chat</IButton>
      </form>
    </>
  )
}