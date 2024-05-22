import bannerImg from '../../assets/images/fundoHogwarts.png'
import Button from '../Button'
import Tag from '../Tag'

import { BannerHero, Infos } from './styles'

const Hero = () => {
  return (
    <BannerHero style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <div>
          <Tag>Rpg</Tag>
          <Tag>PS5</Tag>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$ 250,00</span>
            por R$ 190,00
          </p>
          <Button
            variant="primary"
            type="button"
            title="clique aqui para adicionar ao carrinho"
          >
            Adicionar ao carrinho
          </Button>{' '}
        </Infos>
      </div>
    </BannerHero>
  )
}

export default Hero
