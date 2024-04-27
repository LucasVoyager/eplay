import Game from '../../models/game'
import Product from '../Product'
import { List, ProductContainer, TitlePL } from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => {
  return (
    <ProductContainer background={background}>
      <div className="container">
        <TitlePL>{title}</TitlePL>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.category}
              description={game.description}
              image={game.image}
              infos={game.infos}
              system={game.system}
              title={game.title}
            />
          ))}
        </List>
      </div>
    </ProductContainer>
  )
}

export default ProductsList
