import {Routes, Route} from 'react-router-dom'
import {Header} from './components/Header/Header'
import {MainPage} from './pages/MainPage'
import {ProfilePage} from './pages/ProfilePage'
import {ChatsPage} from './pages/ChatsPage'
import {NotFound} from "./pages/NotFound";
import {Provider} from "react-redux";
import {Articles} from "./pages/Articles";
import {store, persistor} from "./components/store";
import {PersistGate} from "redux-persist/integration/react";

export function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes>
            <Route path='/' element={<Header/>}>
              <Route index element={<MainPage/>}/>
              <Route path="profile" element={<ProfilePage/>}/>
              <Route path="chats">
                <Route index element={<ChatsPage/>}/>
                <Route
                  path=":chatId"
                  element={<ChatsPage/>}
                />
              </Route>
              <Route path="articles" element={<Articles/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </PersistGate>
      </Provider>
    </>
  )
}