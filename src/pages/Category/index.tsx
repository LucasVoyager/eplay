import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

import fifa from '../../assets/images/fifa.png'
import diablo from '../../assets/images/diablo.png'
import starwars from '../../assets/images/starwars.png'

const promocoes: Game[] = []

const emBreve: Game[] = []

const Category = () => {
  return (
    <>
      <ProductsList games={promocoes} background="grey" title="RPG" />
      <ProductsList games={emBreve} background="black" title="Ação" />
      <ProductsList games={promocoes} background="grey" title="Aventura" />
      <ProductsList games={emBreve} background="black" title="FPS" />
    </>
  )
}

export default Category
