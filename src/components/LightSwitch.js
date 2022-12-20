import React from "react"

const LightSwitch = (props) => {
  return (
    <>
      <div 
        className="lightbulb"
        style={{
          backgroundColor: props.switch ? 'yellow' : 'white',
        }}
      >
        {props.status}
      </div>
      <button onClick={props.on}>ON</button>
      <button onClick={props.off}>OFF</button>
      
    </>
  )
}

export default LightSwitch
