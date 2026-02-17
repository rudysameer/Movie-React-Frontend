
import './App.css'

function App() {

  return (
    <>
    <HelloWorld display="Hello World 1"/>
    <HelloWorld display="Whars UP"/>
    <HelloWorld display="How you doin"/>
    </>
  )
}

function HelloWorld({display}) {
  return (
    <div>{display}</div>
  )
}

export default App
