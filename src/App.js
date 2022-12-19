import React, { useState } from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"

const App = () => {
  // const [lightSwitchStatus, setLightSwitchStatus] = useState(false)

  // const turnLight = () => {
  //   if (lightSwitchStatus === false){
  //     setLightSwitchStatus(true)
  //   } else {
  //     setLightSwitchStatus(false)
  //   }
  // }

  // let lightStatus = ""
  // if (lightSwitchStatus === false) {
  //   lightStatus = "Off"
  // } else {
  //   lightStatus = "On"
  // }

  return (
    <>
      <h1>Lightbulb Challenge</h1>
      {/* <LightSwitch lightStatus={lightStatus} turnLight={turnLight} lightSwitchStatus={lightSwitchStatus}/>
      <LightSwitch lightStatus={lightStatus} turnLight={turnLight} lightSwitchStatus={lightSwitchStatus}/> */}
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
      
    </>
  )
}


export default App
