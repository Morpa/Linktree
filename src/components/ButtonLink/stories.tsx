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

export const Default: Story<ButtonLinkProps> = (args) => (
  <ButtonLink {...args} />
)

Default.args = {
  children: 'Instagran',
  as: 'a',
  icon: <Instagram />,
  href: 'link'
}
