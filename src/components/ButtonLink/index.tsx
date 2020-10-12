import { AnchorHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonLinkTypes = AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonLinkProps = {
  buttonLabel: string
  buttonLink: string
} & ButtonLinkTypes

const ButtonLink = ({ buttonLabel, buttonLink, ...props }: ButtonLinkProps) => (
  <S.Wrapper href={buttonLink} {...props}>
    <span>{buttonLabel}</span>
  </S.Wrapper>
)

export default ButtonLink
