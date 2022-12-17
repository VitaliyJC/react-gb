import {useSelector, useDispatch} from "react-redux";
import {changeCheckBox} from '../components/store/profile/actions'

export function ProfilePage() {
  const isChecked = useSelector((store) => store.toggle)

  const dispatch = useDispatch()

  const handlerchangeCheckBox = (value) => {
    dispatch(changeCheckBox(value))
  }

  return (
    <>
      <h1>Profile Page</h1>

      <input type="checkbox" value={isChecked} onChange={handlerchangeCheckBox}/>
    </>
  )
}