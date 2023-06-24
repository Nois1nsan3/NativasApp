import { userAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

export function ProtectorRuta ({ children }) {
  const { user } = userAuth()
  if (user === false) {
    return <Navigate to='/' />
  }
  return children
}
