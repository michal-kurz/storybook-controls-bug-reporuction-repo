import React from 'react'
import { Meta, Story } from '@storybook/react'
import RenamedTooltip, { TooltipProps } from '../Tooltip2'

import { createTheme, ThemeProvider } from '@mui/material'


export default {
  title: 'Atoms/Tooltip2XX',
  component: RenamedTooltip
} as Meta

const muiTheme = createTheme()

const Template: Story<TooltipProps> = args => (
  <ThemeProvider theme={muiTheme}>
    <RenamedTooltip {...args}>
      <div>Hover me!</div>
    </RenamedTooltip>
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  title: 'title (can also be React node)'
}
