import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  hasIcon: boolean
}

const wrapperModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    width: 100%;
    height: ${theme.font.sizes.xxxlarge};
    font-size: ${theme.font.sizes.xxlarge};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};

    svg {
      width: 3.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon }) => css`
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

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
  `}
`
