import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a logo', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Morpa/i).parentElement).toHaveStyle({
      width: '15rem'
    })
  })
})
