import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Major from './pages/major.jsx'
import Events from './pages/events.jsx'
import Nav from './componets/nav.jsx'
import NotFound from './pages/notFound.jsx'
function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Routes>
                    <Route exact path="" element={<Home />}></Route>
                    <Route exact path="/tentang" element={<About />}></Route>
                    <Route exact path="/jurusan" element={<Major />}></Route>
                    <Route exact path="/acara" element={<Events />}></Route>
                    <Route exact path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App
