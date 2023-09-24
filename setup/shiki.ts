import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async ({ loadTheme }) => {
  return {
    theme: {
      light: 'dracula',
      dark: 'dracula',
    }
  }
})
