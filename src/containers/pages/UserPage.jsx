import { userAuth } from '../../context/AuthContext'

export function UserPage () {
  const { logout } = userAuth()

  const handleLogout = () => {
    logout()
  }
  return (
    <div>
      <h1>User Page</h1>

      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}
