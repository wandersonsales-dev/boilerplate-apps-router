import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    {
      name: '@storybook/addon-essentials'
    },
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  staticDirs: ['../public'],
  webpackFinal: (config) => {
    config.resolve?.modules?.push(`${process.cwd()}/src`)
    return config
  },
  docs: {
    defaultName: 'Documentation',
    autodocs: true
  },
  typescript: {
    reactDocgen: 'react-docgen',
    check: false
  }
}
export default config
