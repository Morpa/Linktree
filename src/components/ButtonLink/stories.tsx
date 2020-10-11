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

export const Social: Story<ButtonLinkProps> = (args) => <ButtonLink {...args} />

Social.args = {
  buttonLabel: 'Instagran',
  icon: <Instagram />,
  buttonLink: 'link'
}

export const Public: Story<ButtonLinkProps> = (args) => <ButtonLink {...args} />

Public.args = {
  buttonLabel:
    'How Creating Your Own Opportunities Builds Diversity and Representation in Journalism',
  buttonLink: 'link'
}
