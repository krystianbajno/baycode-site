import * as React from "react"
import Particles from "react-particles-js";
import particlesParams from "./particlesParams"
export default (props) => {
  return <div
    style={{
      position: "absolute",
      top: props.top || 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
    <Particles
      params={particlesParams()}
    />
  </div>
}
