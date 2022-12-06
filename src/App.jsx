import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Message from './components/Message';

export function App() {
    const [messageList, setMesageList] = useState([])
    const [messageBody, setMesageBody] = useState({
        text: '',
        author: ''
    })

    const ROBOT_MESSAGE = 'Здравствуйте , Ваше сообщение получено.'

    useEffect((author) => {
        if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
            setTimeout(() => {
                setMesageList(prevstate => [...prevstate, { text:ROBOT_MESSAGE, author: 'robot' }])
            }, 1500)
        }
    }, [messageList])

    return (
      <div className="App">
          <Form data={messageBody} setData={setMesageBody} setMessage={setMesageList}></Form>
          <div className="messageList">
              {
                  messageList.map((e, i) => <Message text={e.text} author={e.author} key={i} />)
              }
          </div>
      </div>
    );
}