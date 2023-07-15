import { userAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function ProtectorRuta ({ children }) {
  const { user } = userAuth()
  if (user === false) {
    return <Navigate to='/' />
  }
  return children
}
