import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../styles/styles'
import { Card } from '../Product/styles'

export const ProductContainer = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.grey};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.grey : colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
`
export const TitlePL = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
