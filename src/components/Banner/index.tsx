import { Image, Prices, Title } from './styles'

import bannerimg from '../../assets/images/Spiderman.png'

const Banner = () => {
  return (
    <Image style={{ backgroundImage: `url(${bannerimg})` }}>
      <div className="container">
        <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
        <Prices>
          De <span>R$ 250,00</span> <br />
          Por apenas R$ 99,90
        </Prices>
      </div>
    </Image>
  )
}
export default Banner
