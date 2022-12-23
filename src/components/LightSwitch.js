import React, { useState } from "react"
import LightImage1 from "../assets/clearLight.png"
import LightImage2 from "../assets/yellowLight.png"
import SwitchImage1 from "../assets/switchOff.png"
import SwitchImage2 from "../assets/switchOn.png"

const LightSwitch = (props) => {

  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")

  const [switchOnOff, setSwitchOnOff] = useState(false)

  const lightsOnOff = () => {
    if(lightSwitchStatus === "off") {
      setLightSwitchStatus("on")
      setSwitchOnOff(true)
    } else {
      setLightSwitchStatus("off")
      setSwitchOnOff(false)
    }
  }
  
  return (
    <>
      <div 
        className="lightbulb"
        onClick={lightsOnOff}
        style={{
          backgroundColor: switchOnOff ? "yellow" : "white",
        }}
      >
        {props.status}
        <img
          src={switchOnOff ? SwitchImage2 : SwitchImage1}
          alt="image of light switch"
        />
        <img
          src={switchOnOff ? LightImage2 : LightImage1}
          alt="image of light bulb"
        />
      </div>
    </>
  )
}

export default LightSwitch
