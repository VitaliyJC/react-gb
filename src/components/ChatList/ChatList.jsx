import {useRef, useState} from "react"
import {Link} from 'react-router-dom'
import {nanoid} from 'nanoid'

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

export function ChatList({onAddChat, chats}) {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddChat({
      id: nanoid(),
      name: value
    })
  }

  return (
    <>
        <nav aria-label="main mailbox folders">
        <IList>
            {chats.map((chat) => (
              <IListItem disablePadding key={chat.id}>
                <IListItemButton>
                  <IListItemIcon>
                    <ITelegramIcon/>
                  </IListItemIcon>
                <Link to={`/chats/${chat.name}`}>
                  {chat.name}
                </Link>
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
          onChange={handleChange}
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