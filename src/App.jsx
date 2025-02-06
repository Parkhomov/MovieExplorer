import {Routes, Router, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <ol><Link to="/">Home</Link></ol>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer />
    </div>
    </>
  )
}

export default App
