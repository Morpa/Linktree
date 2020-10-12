import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ButtonLink from '.'

describe('<ButtonLink />', () => {
  it('should render a link', () => {
    renderWithTheme(<ButtonLink buttonLabel="Instagran" buttonLink="/test" />)

    expect(screen.getByText(/instagran/i)).toBeInTheDocument()
  })
})
