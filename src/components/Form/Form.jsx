import {useEffect, useState, useRef} from "react";
import {AUTHOR} from "../../constants";

import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField';
import ISendIcon from '@mui/icons-material/Send';
import ITypography from '@mui/material/Typography';

export function Form({addMessage}) {
  const [text, setText] = useState('')
  const myRef = useRef(null)

  useEffect(() => {
    myRef.current.focus();
    console.log(myRef)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    addMessage({
      author: AUTHOR.user,
      text: text
    })

    setText('')
  }
  return (
    <>
      <ITypography variant="h4">
        Form
      </ITypography>
      <form onSubmit={handleSubmit}>
        <ITextField
          id="standard-basic"
          label="Enter message"
          variant="standard"
          onChange={(event) => setText(event.target.value)}
          value={text}
          type="text"
          fullWidth
          ref={myRef}
          autoFocus
        />
        <IButton
          variant="contained"
          color='success'
          size='small'
          type='submit'
          endIcon={<ISendIcon />}
          sx={{my: 2}}
        >
          Add message</IButton>
      </form>
    </>
  )
}