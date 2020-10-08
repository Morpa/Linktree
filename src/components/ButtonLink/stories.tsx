import { Story, Meta } from '@storybook/react/types-6-0'
import { Instagram } from '@styled-icons/boxicons-logos'

import ButtonLink, { ButtonLinkProps } from '.'

export default {
  title: 'ButtonLink',
  component: ButtonLink,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const withIcon: Story<ButtonLinkProps> = (args) => (
  <ButtonLink {...args} />
)

withIcon.args = {
  children: 'Instagran',
  as: 'a',
  icon: <Instagram />,
  href: 'link'
}

export const Default: Story<ButtonLinkProps> = (args) => (
  <ButtonLink {...args} />
)

Default.args = {
  children:
    'How Creating Your Own Opportunities Builds Diversity and Representation in Journalism',
  as: 'a',
  href: 'link'
}
