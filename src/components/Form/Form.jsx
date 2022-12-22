import {useState} from 'react'
import {useDispatch} from "react-redux";
import {addMessage} from "../store/messages/actions";
import {useParams} from "react-router-dom";

import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField';
import ISendIcon from '@mui/icons-material/Send';
import ITypography from '@mui/material/Typography';

export function Form() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const {chatId} = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addMessage(chatId, text))
    setText('')
  }

  return (
    <>
      <ITypography variant="h4">
        Form
      </ITypography>
      <form onSubmit={handleSubmit}>
        <ITextField
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          id="standard-basic"
          label="Enter message"
          variant="standard"
          fullWidth
          autoFocus
        />
        <IButton
          variant="contained"
          color='success'
          size='small'
          type='submit'
          endIcon={<ISendIcon/>}
          sx={{my: 2}}
        >
          Add message</IButton>
      </form>

    </>
  )
}