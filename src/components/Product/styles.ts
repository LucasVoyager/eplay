import styled from 'styled-components'
import { colors } from '../../styles/styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.grey};
  padding: 8px;
  border-radius: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const TitleCd = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
