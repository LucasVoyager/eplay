import Product from '../Product'
import { List, ProductContainer, TitlePL } from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
}

const ProductsList = ({ background, title }: Props) => {
  return (
    <ProductContainer background={background}>
      <div className="container">
        <TitlePL>{title}</TitlePL>
        <List>
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150']}
            system="Windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150']}
            system="Windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150']}
            system="Windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150']}
            system="Windows"
            title="Nome do jogo"
          />
        </List>
      </div>
    </ProductContainer>
  )
}

export default ProductsList
