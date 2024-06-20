import { Game } from '../../pages/Home'
import { formatPrice } from '../ProductsList'

import Button from '../Button'
import Tag from '../Tag'

import { BannerHero, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  return (
    <BannerHero style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formatPrice(game.prices.old)}</span>
            )}
            {game.prices.current && <>por {formatPrice(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              variant="primary"
              type="button"
              title="clique aqui para adicionar ao carrinho"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </BannerHero>
  )
}

export default Hero
