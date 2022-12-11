import {Outlet, NavLink} from 'react-router-dom'

import IContainer from '@mui/material/Container';
import IButton from '@mui/material/Button';

import styles from './Header.module.css'
import ISendIcon from "@mui/icons-material/Send";

export const navigate = [
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
]

export function Header() {

  return (
    <>
      <IContainer>
        <header>
          <nav className={styles.header}>
            <ul>
              {navigate.map((link) => (
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
          </nav>
        </header>
        <main>
          <Outlet/>
        </main>
      </IContainer>
    </>
  )
}