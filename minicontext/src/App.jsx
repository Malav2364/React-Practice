
import './App.css'
import UserContextProvider from './context/userContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>Malav Patel</h1>
    </UserContextProvider>
  )
}

export default App
