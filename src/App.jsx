import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App
