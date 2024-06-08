import Section from '../Section'
import magica from '../../assets/images/magica.png'
import { Item, Itens } from './styles'

const Gallery = () => {
  return (
    <Section title="Galeria" background="black">
      <Itens>
        <Item>
          <img src={magica} alt="imagem do link" />
        </Item>
        <Item>
          <img src={magica} alt="imagem do link" />
        </Item>
        <Item>
          <img src={magica} alt="imagem do link" />
        </Item>
        <Item>
          <img src={magica} alt="imagem do link" />
        </Item>
      </Itens>
    </Section>
  )
}

export default Gallery
