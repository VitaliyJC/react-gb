import IBox from '@mui/material/Box';
import ITypography from '@mui/material/Typography';
import IDivider from '@mui/material/Divider';

export function MessageList({messages}) {
  console.log('messages', messages)
  return (
    <>
      <ITypography variant="h4">
        MessageList
      </ITypography>
      {messages.map((message, index) => (
        <IBox key={index} sx={{
          bgcolor: 'background.paper',
          boxShadow: 2,
          borderRadius: 2,
          p: 2,
          mb: 2,
        }}>
          <ITypography variant="h5">
            {message.author}
          </ITypography>
          <IDivider/>
          <ITypography sx={{py: 2}}>
            {message.text}
          </ITypography>
{/*{message.author}: {message.text}*/}
        </IBox>
      ))}
    </>
  )
}