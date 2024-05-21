import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'

const RoutesCP = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/category" element={<Category />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default RoutesCP
