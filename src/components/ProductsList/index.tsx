import { Game } from '../../pages/Home'
import Product from '../Product'
import { List, ProductContainer, TitlePL } from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
const ProductsList = ({ background, title, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formatPrice(game.prices.current))
    }

    return tags
  }

  return (
    <ProductContainer background={background}>
      <div className="container">
        <TitlePL>{title}</TitlePL>
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                key={game.id}
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                system={game.details.system}
                title={game.name}
              />
            </li>
          ))}
        </List>
      </div>
    </ProductContainer>
  )
}

export default ProductsList
