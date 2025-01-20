import {Routes, Router, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Details from './pages/Details'
import './App.css'

function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <ol><Link to="/">Home</Link></ol>
            <ol><Link to="/favorites">Favorites</Link></ol>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/details" element={<Details />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
    </div>
    </>
  )
}

export default App
