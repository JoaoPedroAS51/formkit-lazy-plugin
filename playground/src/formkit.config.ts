import '@formkit/themes/genesis'
import { genesisIcons } from '@formkit/icons'
import { DefaultConfigOptions } from '@formkit/vue'
import { createLazyPlugin } from '../..'

const config: DefaultConfigOptions = {
  icons: { ...genesisIcons },
  plugins: [createLazyPlugin()]
}

export default config
