import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import * as ButtonLinkStyles from 'components/ButtonLink/styles'

const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${ButtonLinkStyles.Wrapper},
    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`

export const SectionLinks = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${ButtonLinkStyles.Wrapper} {
      margin-bottom: 1rem;
    }

    ${media.lessThan('medium')`
      ${HeadingStyles.Wrapper} {
          margin-bottom:  ${theme.spacings.small};
          color: ${theme.colors.white};
        }
        margin-bottom: calc(${theme.spacings.small} * 2);
    `}

    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 14rem;
      padding-bottom: 10rem;

      ${HeadingStyles.Wrapper} {
        margin-bottom:  ${theme.spacings.small};
        color: ${theme.colors.white};
      }
    `}
  `}
`
