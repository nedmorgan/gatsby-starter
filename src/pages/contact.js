import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: "indigo" }}>
    <Link to="/">Home</Link>
    <Header headerText="Welcome to the Contact Page" />
    <p>Send us a message!</p>
  </div>
)
