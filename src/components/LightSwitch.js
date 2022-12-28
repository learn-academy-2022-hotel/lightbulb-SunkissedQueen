import React, { useState } from "react"
import LightImage1 from "../assets/clearLight.png"
import LightImage2 from "../assets/yellowLight.png"
import SwitchImage1 from "../assets/switchOff.png"
import SwitchImage2 from "../assets/switchOn.png"

const LightSwitch = (props) => {

  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")

  const lightsOnOff = () => {
    if(lightSwitchStatus === "off") {
      setLightSwitchStatus("on")
    } else {
      setLightSwitchStatus("off")
    }
  }
  
  return (
    <>
      <div 
        className="lightbulb"
        style={{
          backgroundColor: lightSwitchStatus === "on" ? "#ffe4c4" : "#ffffff", 
          boxShadow: lightSwitchStatus === "on" ? "5px 5px 3px #ffe4c4, 10px 10px 8px #888888" : "5px 5px 3px #888888"
        }}
      >
        <section onClick={lightsOnOff}>
          <img
            src={lightSwitchStatus === "on" ? SwitchImage2 : SwitchImage1}
            alt={
              lightSwitchStatus === "on" ? 
              "white rectangular box encasing a light switch pointing up and displaying the word on in gray uppercase letters" : 
              "white rectangular box encasing a light switch pointing down and displaying the word off in gray uppercase letters"
            }
            style={{ width: 100, height: 100 }}
          />
        </section>
        <img
          src={lightSwitchStatus === "on" ? LightImage2 : LightImage1}
          alt={
            lightSwitchStatus === "on" ? 
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
