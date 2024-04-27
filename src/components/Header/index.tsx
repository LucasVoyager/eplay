import { HeaderBar, LinkCart, LinkItem, Links } from './styles'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import carshopp from '../../assets/images/cartshopping.svg'

const Header = () => {
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/category">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <LinkCart href="#">
        0 - produto(s)
        <img src={carshopp} alt="carrinho shopping" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
