import { Story, Meta } from '@storybook/react/types-6-0'

import ButtonLink, { ButtonLinkProps } from '.'

export default {
  title: 'ButtonLink',
  component: ButtonLink,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Social: Story<ButtonLinkProps> = (args) => <ButtonLink {...args} />

Social.args = {
  buttonLabel: 'Instagran',
  buttonLink: 'link'
}

export const Public: Story<ButtonLinkProps> = (args) => <ButtonLink {...args} />

Public.args = {
  buttonLabel:
    'How Creating Your Own Opportunities Builds Diversity and Representation in Journalism',
  buttonLink: 'link'
}
