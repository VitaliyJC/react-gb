import {Outlet, NavLink} from 'react-router-dom'
import {useSelector} from "react-redux";
import {logOut} from "../../services/firebase";
import {useNavigate} from "react-router-dom";

import IContainer from '@mui/material/Container';
import IButton from '@mui/material/Button';

import styles from './Header.module.css'

export const navigates = [
  {
    id: 1,
    name: 'Main',
    to: '/'
  },
  {
    id: 2,
    name: 'Profile',
    to: '/profile'
  },
  {
    id: 3,
    name: 'Chat',
    to: '/chats'
  },
  {
    id: 4,
    name: 'Articles',
    to: '/articles'
  },
]

export function Header() {
  const navigate = useNavigate()
  const isAuth = useSelector((store) => store.profile.isAuth)

  const handleLogin = () => {
    navigate('/signin')
  }
  const handleSignUp = () => {
    navigate('/signup')
  }
  const handleLogout = async () => {
    await logOut()
  }

  return (
    <>
      <IContainer>
        <header>
          <nav className={styles.header}>
            <ul>
              {navigates.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.to}
                  >
                    <IButton
                      color='primary'
                      variant='contained'
                      size='small'
                      type='submit'
                      sx={{my: 2}}
                    >
                      {link.name}
                    </IButton>
                  </NavLink>
                </li>
              ))}
            </ul>
            {!isAuth && (
              <>
                <IButton
                  color='primary'
                  variant='contained'
                  size='small'
                  type='submit'
                  sx={{my: 2}}
                  onClick={handleLogin}
                >
                  login
                </IButton>
                <IButton
                  color='primary'
                  variant='contained'
                  size='small'
                  type='submit'
                  sx={{my: 2}}
                  onClick={handleSignUp}
                >
                  sing up
                </IButton>
              </>
            )}
            {isAuth && (
              <>
                <IButton
                  color='primary'
                  variant='contained'
                  size='small'
                  type='submit'
                  sx={{my: 2}}
                  onClick={handleLogout}
                >
                  logout
                </IButton>
              </>
            )}
          </nav>
        </header>
        <main>
          <Outlet/>
        </main>
      </IContainer>
    </>
  )
}