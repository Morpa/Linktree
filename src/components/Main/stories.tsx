import { Story, Meta } from '@storybook/react/types-6-0'
import { SectionHeaderProps } from 'types/api'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Default: Story<SectionHeaderProps> = (args) => <Main {...args} />
