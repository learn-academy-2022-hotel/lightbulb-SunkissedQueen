import React, {useState} from "react"
import LightSwitch from "./LightSwitch"

const Bulb = (props) => {
  const [extraLight, setExtraLight] = useState([])

  const addLight = () => {
    setExtraLight([...extraLight, extraLight.length + 1])
  }

  const removeLight = () => {
    setExtraLight(extraLight.slice(0, extraLight.length - 1))
  }

  return (
    <>
      <button onClick={addLight}>More lights</button>
      <button onClick={removeLight}>Less lights</button>
      {extraLight.map((value) => {
        return(
          <LightSwitch />
        )
      })}
    </>
  )
}

export default Bulb
