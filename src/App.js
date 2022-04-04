import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Mywork from './components/Mywork'
import Layout from './components/Layout'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="my-work" element={<Mywork />} />

        </Route>
      </Routes>
    </>
  )
}

export default App