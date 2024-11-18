import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom"

import App from './App.jsx'

import ProjectGridContent from "./components/ProjectGrid/ProjectGridContent.jsx"
import FactsPage from "./components/FactsPage/FactsPage.jsx"
import BusinessCardContainer from "./components/BusinessCard/BusinessCardContainer.jsx"
import ExperiencesContainer from "./components/Experiences/ExperiencesContainer.jsx"
import CatContactContainer from "./components/CatContacts/CatContactContainer.jsx"
import JokesContainer from "./components/DumbJokes/JokesContainer.jsx"
import TravelJournal from "./components/TravelJournal/TravelJournal.jsx"
import MemeGenerator from './components/MemeGenerator/MemeGenerator.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <ProjectGridContent />
            },
            {
                path: "/facts",
                element: <FactsPage />
            },
            {
                path: "/business",
                element: <BusinessCardContainer />
            },
            {
                path: "/experiences",
                element: <ExperiencesContainer />
            },
            {
                path: "/cat_contacts",
                element: <CatContactContainer />
            },
            {
                path: "/dumbjokes",
                element: <JokesContainer />
            },
            {
                path: "/travel",
                element: <TravelJournal />
            },
            {
                path: "/memes",
                element: <MemeGenerator />
            }
        ]
    }
])

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
