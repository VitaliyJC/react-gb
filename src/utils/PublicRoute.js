import {useSelector} from 'react-redux';
import {Outlet} from 'react-router-dom';
import {selectAuth} from "../components/store/profile/selectors";


export const PublicRoute = ({component}) => {
  const isAuth = useSelector(selectAuth);

  if (isAuth) {

  }

  return component ? component : <Outlet/>;
};
