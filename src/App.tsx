import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles/styles'
import Home from './pages/Home'
import Category from './pages/Category'

const RoutesCP = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/category" element={<Category />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RoutesCP />
    </BrowserRouter>
  )
}

export default App
