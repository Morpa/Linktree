import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.medium};
    color: ${theme.colors.white};
  `}
`

export const Logo = styled.img`
  ${({ theme }) => css`
    width: ${theme.spacings.xxxlarge};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxlarge};
    font-weight: ${theme.font.bold};
  `}
`

export const Description = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
  `}
`
