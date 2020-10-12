import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    width: 100%;
    height: ${theme.font.sizes.link};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxsmall};

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    ${media.greaterThan('medium')`
      height: ${theme.font.sizes.xxxlarge};
    `}
  `}
`
