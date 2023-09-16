import Text from './txt'
import Com from './comp'
function App() {
  const username = "Malav Patel"
  return (
    <>
       <Com/>      {/*can return only one component but use empty tag to return multiple components */}
       <Text/>
       <h1>{username}</h1> {/*evaluated expression*/ }
    </>
  )
}

export default App
