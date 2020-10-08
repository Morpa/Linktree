import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { Instagram } from '@styled-icons/boxicons-logos'

import ButtonLink from '.'

describe('<ButtonLink />', () => {
  it('should render a link', () => {
    renderWithTheme(
      <ButtonLink as="a" href="/link" icon={<Instagram data-testid="icon" />}>
        Instagran
      </ButtonLink>
    )

    expect(screen.getByText(/instagran/i)).toBeInTheDocument()

    expect(screen.getByTestId('icon')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /instagran/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
