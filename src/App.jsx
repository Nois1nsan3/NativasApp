import { AuthContextProvider } from './context/AuthContext'
import AppRouter from './routers/router'

function App () {
  return (
    <AuthContextProvider>
      <div>
        <AppRouter />
      </div>
    </AuthContextProvider>
  )
}

export default App
