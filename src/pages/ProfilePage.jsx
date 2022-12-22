import {toggleProfile} from "../components/store/profile/actions";
import {selectVisible} from "../components/store/profile/selectors";
import {useSelector, useDispatch} from "react-redux";
export function ProfilePage() {
  const visible = useSelector(selectVisible)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Profile Page</h1>
      <input type='checkbox' checked={visible} readOnly/>
      <button onClick={() => dispatch(toggleProfile())}>change visible</button>
    </>
  )
}