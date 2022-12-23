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
          backgroundColor: switchOnOff ? "bisque" : "white",
        }}
      >
        {props.status}
        <img
          src={switchOnOff ? SwitchImage2 : SwitchImage1}
          alt={
            switchOnOff ? 
            "white rectangular box encasing a light switch pointing up and displaying the word on in gray uppercase letters" : 
            "white rectangular box encasing a light switch pointing down and displaying the word off in gray uppercase letters"
          }
          style={{ width: 100, height: 100 }}
        />
        <img
          src={switchOnOff ? LightImage2 : LightImage1}
          alt={
            switchOnOff ? 
            "long black cord attached to the top of a clear light bulb" : 
            "long black cord attached to the top of a yellow light bulb"
          }
          style={{ width: 100, height: 200 }}
        />
      </div>
    </>
  )
}

export default LightSwitch
