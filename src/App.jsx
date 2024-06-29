import Header from "./components/Header"
import "./App.css"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { ThemeProvider } from "../contexts/ThemeContext"


function App() {
  return (
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
  )
}

export default App