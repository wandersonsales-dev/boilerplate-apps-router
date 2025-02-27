import { Meta, StoryObj } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<typeof Main>

export const Default: StoryObj = {}

export const Simple: StoryObj = {
  args: {
    title: 'Simple Title',
    description: 'Simple Description'
  }
}
