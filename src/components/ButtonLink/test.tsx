import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { Instagram } from '@styled-icons/boxicons-logos'

import ButtonLink from '.'

describe('<ButtonLink />', () => {
  it('should render a link', () => {
    renderWithTheme(
      <ButtonLink
        buttonLabel="Instagran"
        buttonLink="/test"
        icon={<Instagram data-testid="icon" />}
      />
    )

    expect(screen.getByText(/instagran/i)).toBeInTheDocument()

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
