import './App.css'
import Content from './Components/Content'
import Sidebar from './Components/Sidebar'
import { useState } from 'react'

function App() {

  const [stepLvl, setStepLvl] = useState('1')

  const handleStepClick = (e) => {
    setStepLvl(e.currentTarget.textContent)
  }

  return (
    <div className="container">
      <Sidebar stepLvl={stepLvl} onClick={handleStepClick}/>
      <Content stepLvl={stepLvl}/>
    </div>
  )
}

export default App
