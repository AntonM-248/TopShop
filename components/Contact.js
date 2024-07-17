import React from 'react'
import { useContext } from 'react'
import UserContext from '../utils/UserContext'

const Contact = () => {
  const user = useContext(UserContext);

  return (
    <h1>Contact { user.username } at 9999999999999</h1>
  )
}

export default Contact