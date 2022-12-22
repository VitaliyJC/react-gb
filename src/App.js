import {Routes, Route} from 'react-router-dom'
import {Header} from './components/Header/Header'
import {MainPage} from './pages/MainPage'
import {ProfilePage} from './pages/ProfilePage'
import {ChatsPage} from './pages/ChatsPage'
import {NotFound} from "./pages/NotFound";
import {Provider} from "react-redux";
import {store} from "./components/store";

export function App () {

  return (
    <>
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="profile" element={<ProfilePage/>}/>
          <Route path="chats">
            <Route index element={<ChatsPage/>}/>
            <Route
              path=":chatId"
              element={<ChatsPage/>}
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Provider>
    </>
  )
}