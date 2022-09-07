import React, { useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'

import { Login } from './pages/Login'
import { WindowContext, WindowSize } from './contexts/WindowContext'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function App() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight
  })

  function handleResize() {
    const { innerWidth: width , innerHeight: height } = window
    setWindowSize({width, height})
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <WindowContext.Provider value={windowSize} >
      <Login />
    </WindowContext.Provider>  
  )
}