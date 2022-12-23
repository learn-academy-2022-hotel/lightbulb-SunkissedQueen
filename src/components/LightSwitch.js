import React, { useState } from "react"

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
      </div>
    </>
  )
}

export default LightSwitch
