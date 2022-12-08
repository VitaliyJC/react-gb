import uuid from "react-uuid";

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


export function Chat() {
  const chats = [
    {
      id: uuid(),
      name: 'chat_with_someone_1'
    },
    {
      id: uuid(),
      name: 'chat_with_someone_2'
    },
    {
      id: uuid(),
      name: 'chat_with_someone_3'
    }
  ]

  return (
    <>
      <ITypography variant="h4">
        ChatList
      </ITypography>
      <nav aria-label="main mailbox folders">
        <IList>
          {chats.map((chatItem) => (
            <IListItem disablePadding key={uuid()}>
              <IListItemButton>
                <IListItemIcon>
                  <ITelegramIcon/>
                </IListItemIcon>
                {chatItem.name}
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
    </>
  )
}