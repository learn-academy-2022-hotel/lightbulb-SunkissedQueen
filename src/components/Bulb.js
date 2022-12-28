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
      <h2>Turn the lights on and off!</h2>
      <div className="center">
        <button onClick={addLight}>
          More lights
        </button>
        <button onClick={removeLight}>
          Less lights
        </button>
      </div>
      {extraLight.map((value, index) => 
          <div
            key={index} 
            className="col"
          >
            <LightSwitch />
          </div>
      )}
    </>
  )
}

export default Bulb
