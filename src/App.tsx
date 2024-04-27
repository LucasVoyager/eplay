import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles/styles'

import RoutesCP from './routes'

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
