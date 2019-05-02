import React from "react"

export default () => (
  <div
    style={{
      color: `tomato`,
      width: `100%`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
    }}
  >
    <h1 style={{ fontSize: `48px` }}>Hello Walter!</h1>
    <p style={{ fontSize: `24px` }}>What a world!</p>
    <img
      style={{ borderRadius: `5px` }}
      src="https://source.unsplash.com/random/400x200"
      alt=""
    />
  </div>
)
