import { ProductContainer, TitlePL } from './styles'

export type Props = {
  title: string
  background: 'black' | 'grey'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => {
  return (
    <ProductContainer background={background}>
      <div className="container">
        <TitlePL>{title}</TitlePL>
        {children}
      </div>
    </ProductContainer>
  )
}

export default Section
