import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Login from './Login'
import RouterTo from './RouterTo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <Home/> */}
{/* <Login/> */}
<RouterTo/>
    </>
  )
}

export default App
