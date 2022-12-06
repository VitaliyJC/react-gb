export function Form({data, setData, setMessage}) {
    const {text, author} = data
    const submitForm = (e) => {
        e.preventDefault()
        if (text.length > 0) {
            setMessage(prevstate => [...prevstate, {text, author}])
        }
        setData(
          {
              text: '',
              author: ''
          }
        )
    }

    return (
      <form onSubmit={submitForm}>

          <input placeholder='Name' value={text} onChange={(e) =>
            setData(prevstate => ({...prevstate, text: e.target.value})
            )}/>

          <input placeholder='Text' value={author} onChange={(e) =>
            setData(prevstate => ({...prevstate, author: e.target.value})
            )}/>

          <button type='submit'>Send</button>
      </form>
    )
}

export default Form