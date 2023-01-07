import {Routes, Route} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {useState, useEffect} from "react";
import {PersistGate} from "redux-persist/integration/react";

import {persistor} from "./components/store";
import {auth} from "./components/store/profile/actions";
import {firebaseAuth, messagesRef} from "./services/firebase";
import {onValue} from "firebase/database"

import {Header} from './components/Header/Header'
import {MainPage} from './pages/MainPage'
import {ProfilePage} from './pages/ProfilePage'
import {ChatsPage} from './pages/ChatsPage'
import {NotFound} from "./pages/NotFound";
import {Articles} from "./pages/Articles";
import {PublicRoute} from "./utils/PublicRoute";
import {PrivateRoute} from "./utils/PriviteRoute";
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";
import {ChatList} from "./components/ChatList/ChatList";

export function App() {
  const dispatch = useDispatch()
  const [messageDB, setMessageDB] = useState({})
  const [chats, setChats] = useState([])

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(auth(true))
      } else {
        dispatch(auth(false))
      }
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val()

      const newChats = Object.entries(data).map((item) => ({
        name: item[0],
        messages: item[1].messageList
      }))


      setMessageDB(data)
      setChats(newChats)
    })
  }, [])

  return (
    <>
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route index element={<MainPage/>}/>
            <Route path="profile" element={<ProfilePage/>}/>
            <Route path="chats" element={<PrivateRoute/>}>
              <Route
                index
                element={<ChatList chats={chats} messageDB={messageDB}/>}
              />
              <Route
                path=":chatId"
                element={<ChatsPage chats={chats} messageDB={messageDB}/>}
              />
            </Route>
            <Route path="articles" element={<Articles/>}/>
            <Route path="signin" element={<PublicRoute component={<SignIn/>}/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </PersistGate>
    </>
  )
}