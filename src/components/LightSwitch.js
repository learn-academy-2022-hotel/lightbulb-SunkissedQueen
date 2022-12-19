import React from "react"
import { useState } from "react"
import switchOn from '../assets/switchOn.png'
import SwitchOff from '../assets/SwitchOff.png'
import lightOn from '../assets/lightOn.png'
import lightOff from '../assets/lightOff.png'

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
      <div className="bulbWrap">
        <div 
          onClick={turnLight} 
          className="lightbulb" 
          style={{backgroundImage: lightSwitchStatus ? 'url(' + switchOn + ')' : 'url(' + SwitchOff + ')', backgroundSize: 'contain'}}
        >
          {lightStatus}
        </div>

        {!lightSwitchStatus && <div className="lightOffPic" style={{backgroundImage: 'url(' + lightOff + ')', backgroundSize: 'contain'}}></div>}

        {lightSwitchStatus && <div className="lightOnPic" style={{backgroundImage: 'url(' + lightOn + ')', backgroundSize: 'contain'}}></div>}
      </div>
    </>
  )
}

export default LightSwitch
