import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { defu } from 'defu'
import type { ModuleOptions } from './types'

export type { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-yandex-metrika',
    configKey: 'yandexMetrika',
  },
  defaults: {
    id: 99999999,
    enabled: true,
    debug: false,
    clickmap: false,
    trackLinks: false,
    accurateTrackBounce: false,
    webvisor: false,
    trackHash: false,
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    if (!options.id) {
      console.warn(
        '[nuxt-yandex-metrika] Counter ID is not specified. Module will be disabled.',
      )
    }

    nuxt.options.runtimeConfig.public.yandexMetrika = defu(
      nuxt.options.runtimeConfig.public.yandexMetrika,
      options,
    )

    addPlugin({
      src: resolver.resolve('./runtime/plugins/plugin.server'),
      mode: 'server',
    })
  },
})
