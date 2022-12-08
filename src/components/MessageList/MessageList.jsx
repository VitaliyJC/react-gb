import uuid from "react-uuid";

import IBox from '@mui/material/Box';
import IDivider from '@mui/material/Divider';
import ITypography from '@mui/material/Typography';
import {blue} from "@mui/material/colors";

export function MessageList({messages}) {

  return (
    <>
      <ITypography variant="h4">
        MessageList
      </ITypography>
      <ul>
        {messages.map((item) => (
          <IBox key={uuid()} sx={{
            bgcolor: 'background.paper',
            boxShadow: 2,
            borderRadius: 2,
            p: 2,
            mb: 2,
          }}>
            <ITypography variant="h5">
              {item.author}
            </ITypography>
            <IDivider/>
            <ITypography sx={{py: 2}}>
              {item.text}
            </ITypography>
          </IBox>
        ))}
      </ul>
    </>
  )
}