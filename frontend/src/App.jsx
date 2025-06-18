import React from 'react'
import { Route, Routes } from "react-router"
import toast from 'react-hot-toast'

import AboutMePage from "./pages/AboutMePage"
import CreateWritingPage from "./pages/CreateWritingPage"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import SearchResultPage from "./pages/SearchResultPage"
import WritingDetailPage from "./pages/WritingDetailPage"
import WritingsPage from "./pages/WritingsPage"
import LoginPage from './pages/LoginPage'

import NavBarExample from "./components/NavBarExample.jsx"
import { MathJaxContext } from 'better-react-mathjax'


const App = () => {

  const config = {
        loader: { load: ["[tex]/html"] },
        tex: {
            packages: { "[+]": ["html"] },
            inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"]
            ],
            displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"]
            ]
        }
    };

  return (
    <div>
      <MathJaxContext version={3} config={config}>
        <NavBarExample/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/create" element={<CreateWritingPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/searchresult" element={<SearchResultPage />} />
          <Route path="/writings/:id" element={<WritingDetailPage />} />
          <Route path="/writings" element={<WritingsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </MathJaxContext>
    </div>
  )
}

export default App
