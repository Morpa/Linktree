import { AnchorHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonLinkTypes = AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonLinkProps = {
  icon?: React.ReactNode
  as: React.ElementType
} & ButtonLinkTypes

const ButtonLink = ({ children, icon, ...props }: ButtonLinkProps) => (
  <S.Wrapper hasIcon={!!icon} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default ButtonLink
