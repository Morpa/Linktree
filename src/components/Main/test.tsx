import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Main from '.'

const props = {
  title: 'Heading 1',
  description: 'Heading 2'
}

describe('<Main />', () => {
  it('should render main with title, description and image', () => {
    const { container } = renderWithTheme(<Main {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/Morpa/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
