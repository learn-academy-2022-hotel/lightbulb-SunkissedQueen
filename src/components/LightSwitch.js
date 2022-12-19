import React from "react"
import { useState } from "react"

const LightSwitch = () => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState(false)

  const turnLight = () => {
    if (lightSwitchStatus === false){
      setLightSwitchStatus(true)
    } else {
      setLightSwitchStatus(false)
    }
  }

  let lightStatus = ""
  if (lightSwitchStatus === false) {
    lightStatus = "Off"
  } else {
    lightStatus = "On"
  }

  return (
    <>
      <div 
        onClick={turnLight} 
        className="lightbulb" 
        style={{backgroundColor: lightSwitchStatus ? 'yellow' : 'white'}}>
        {lightStatus}
      </div>
    </>
  )
}

export default LightSwitch
