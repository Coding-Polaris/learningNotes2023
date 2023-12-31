import { useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import ProjectPage from "./components/ProjectGrid/ProjectPage.jsx"
import FactsPage from "./components/FactsPage/FactsPage.jsx"
import BusinessCardContainer from "./components/BusinessCard/BusinessCardContainer.jsx"
import "./stylesheets/index.scss"
import "./stylesheets/project.scss"

export default function App() {
  return (
    <>
      <Navbar />
      <BusinessCardContainer />
    </>
  )
}
