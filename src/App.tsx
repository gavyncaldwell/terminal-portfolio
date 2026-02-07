import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Gear from './pages/Gear'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Writing from './pages/Writing'
import WritingPost from './pages/WritingPost'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/gear" element={<Gear />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<WritingPost />} />
      </Route>
    </Routes>
  )
}

export default App
