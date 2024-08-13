import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./Header/Header"
import Main from "./Main/Main"
import Mission from "./Mission/Mission"
import Community from "./Community/Community"

const rootElement = document.getElementById("root")
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <>
      <Header />
      <Main />
      <Mission />
      <Community />
    </>,
  )
} else {
  console.error("Root element not found")
}
