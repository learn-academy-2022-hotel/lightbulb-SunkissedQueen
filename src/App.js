import React, { useState } from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"

const App = () => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")

  const lightsOn = () => {
    setLightSwitchStatus("on")
  }

  const lightsOff = () => {
    setLightSwitchStatus("off")
  }

  return (
    <>
      <h1>Lightbulb Challenge</h1>
      <LightSwitch 
        status={lightSwitchStatus} 
        on={lightsOn} 
        off={lightsOff}  
      />
    </>
  )
}

export default App
