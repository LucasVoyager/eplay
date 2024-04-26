import Product from '../Product'
import { List, ProductContainer, TitlePL } from './styles'

type Props = {
  title: string
  background: 'grey' | 'black'
}

const ProductsList = ({ background, title }: Props) => {
  return (
    <ProductContainer>
      <div className="container">
        <TitlePL>{title}</TitlePL>
        <List>
          <Product />
          <Product />
          <Product />
          <Product />
        </List>
      </div>
    </ProductContainer>
  )
}

export default ProductsList
