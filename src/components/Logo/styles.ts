import styled, { css } from 'styled-components'

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.spacings.xxxlarge};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
