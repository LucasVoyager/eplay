import { Image, Prices, Title } from './styles'

import bannerimg from '../../assets/images/Spiderman.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {
  return (
    <Image style={{ backgroundImage: `url(${bannerimg})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
          <Prices>
            De <span>R$ 250,00</span> <br />
            Por apenas R$ 99,90
          </Prices>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}
export default Banner
