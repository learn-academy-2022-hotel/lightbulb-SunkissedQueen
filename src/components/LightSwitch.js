import React from "react"

const LightSwitch = (props) => {
  return (
    <>
      <div className="lightbulb">
        {props.status}
      </div>
      <button onClick={props.on}>ON</button>
      <button onClick={props.off}>OFF</button>
      
    </>
  )
}

export default LightSwitch
