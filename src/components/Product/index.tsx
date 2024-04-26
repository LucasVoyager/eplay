import Tag from '../Tag'
import { Card, Description, TitleCd } from './styles'

const Product = () => {
  return (
    <Card>
      <img src="https://placehold.co/222x250" alt="" />
      <TitleCd>Nome do jogo</TitleCd>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeat
        excepturi officia harum autem, perferendis laboriosam quas reiciendis
        dolor ratione pariatur unde accusantium iste molestias itaque, veritatis
        natus culpa id!
      </Description>
    </Card>
  )
}

export default Product
