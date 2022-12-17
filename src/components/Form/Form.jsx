import {useState} from 'react'
import {AUTHOR} from '../../constants'

import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField';
import ISendIcon from '@mui/icons-material/Send';
import ITypography from '@mui/material/Typography';

export function Form({addMessage}) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addMessage({
      author: AUTHOR.user,
      text
    })

    setText('')
  }

  console.log('input', text)

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