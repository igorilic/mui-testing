import type { ComponentMeta, ComponentStory, Meta } from '@storybook/react'
import { Button } from './button'
import { testingGrid } from '../../utils'

export default {
  component: Button,
  title: 'Button'
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} children={`${args.color}-${args.size}`} />
)

export const Primary = Template.bind({})
Primary.args = testingGrid[0]

export const Secondary = Template.bind({})
Secondary.args = testingGrid[3]

export const Success = Template.bind({})
Success.args = testingGrid[6]

export const Error = Template.bind({})
Error.args = testingGrid[9]

export const WithIconOrDropdown = Template.bind({})
WithIconOrDropdown.args = testingGrid[36]
