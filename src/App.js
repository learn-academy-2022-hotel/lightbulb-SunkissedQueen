import React, { useState } from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"

const App = () => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")

  const [switchOn, setSwitchOn] = useState(false)

  const lightsOn = () => {
    setLightSwitchStatus("on")
    setSwitchOn(true)
  }

  const lightsOff = () => {
    setLightSwitchStatus("off")
    setSwitchOn(false)
  }

  return (
    <>
      <h1>Lightbulb Challenge</h1>
      <LightSwitch 
        status={lightSwitchStatus}
        switch={switchOn} 
        on={lightsOn} 
        off={lightsOff}  
      />
    </>
  )
}

export default App
