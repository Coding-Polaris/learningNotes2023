import { useState } from 'react'
import { Outlet } from "react-router"

import Navbar from "./components/Navbar.jsx"

import "./stylesheets/index.scss"
import "./stylesheets/project.scss"

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
