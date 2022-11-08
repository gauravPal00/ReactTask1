import Button from 'react-bootstrap/Button'

import { useDispatch } from 'react-redux'
import { changeBackground } from './Action'
export const Change = () => {
  const dispatch = useDispatch()

  return (
    <Button variant="warning" onClick={()=>dispatch(changeBackground())}>Change</Button>
  )
}
