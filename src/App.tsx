import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import Writing from './pages/Writing'
import WritingPost from './pages/WritingPost'
import Videos from './pages/Videos'
import Uses from './pages/Uses'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<WritingPost />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
