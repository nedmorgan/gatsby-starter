import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

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
    <Link to="/contact/">Contact</Link>
    <Header style={{ fontSize: `48px` }} headerText="Hello Walter!" />
    <p style={{ fontSize: `24px` }}>What a world!</p>
    <img
      style={{ borderRadius: `5px` }}
      src="https://source.unsplash.com/random/400x200"
      alt=""
    />
  </div>
)
