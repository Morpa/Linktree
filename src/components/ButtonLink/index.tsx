import { AnchorHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonLinkTypes = AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonLinkProps = {
  icon?: React.ReactNode
  buttonLabel: string
  buttonLink: string
  category?: string
} & ButtonLinkTypes

const ButtonLink = ({
  buttonLabel,
  icon,
  buttonLink,
  ...props
}: ButtonLinkProps) => (
  <S.Wrapper as="a" href={buttonLink} hasIcon={!!icon} {...props}>
    {!!icon && icon}
    <span>{buttonLabel}</span>
  </S.Wrapper>
)

export default ButtonLink
