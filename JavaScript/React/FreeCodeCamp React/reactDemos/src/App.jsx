import { useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import ProjectPage from "./components/ProjectGrid/ProjectPage.jsx"
import FactsPage from "./components/FactsPage/FactsPage.jsx"
import BusinessCardContainer from "./components/BusinessCard/BusinessCardContainer.jsx"
import ExperiencesContainer from "./components/Experiences/ExperiencesContainer.jsx"
import CatContactContainer from "./components/CatContacts/CatContactContainer.jsx"
import JokesContainer from "./components/DumbJokes/JokesContainer.jsx"
import TravelJournal from "./components/TravelJournal/TravelJournal.jsx"
import MemeGenerator from './components/MemeGenerator/MemeGenerator.jsx'
import "./stylesheets/index.scss"
import "./stylesheets/project.scss"

export default function App() {
  return (
    <>
      <Navbar />
      <MemeGenerator />
    </>
  )
}
