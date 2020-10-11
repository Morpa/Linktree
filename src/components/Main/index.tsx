import Logo from 'components/Logo'
import { SectionHeaderProps } from 'types/api'

import * as S from './styles'

const Main = ({ title, description }: SectionHeaderProps) => (
  <S.Wrapper>
    <Logo />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
