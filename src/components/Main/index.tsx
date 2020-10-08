import * as S from './styles'

const Main = ({
  title = 'Morpa',
  description = 'Welcome to my personal linktree'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/morpa.svg" alt="Imagem de um círculo com uma letra M" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
