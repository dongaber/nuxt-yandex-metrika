import { defineNuxtPlugin, useRuntimeConfig, useHead } from '#imports'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const { id, enabled } = config.public.yandexMetrika

  if (!enabled) {
    return
  }

  useHead({
    link: [
      {
        rel: 'preload',
        as: 'script',
        href: 'https://mc.yandex.ru/metrika/tag.js',
      },
    ],
    script: [
      {
        id: 'yandex-metrika',
        key: 'yandex-metrika',
        type: 'text/javascript',
        innerHTML: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");`,
      },
    ],
    noscript: [
      {
        innerHTML: `<div><img src="https://mc.yandex.ru/watch/${id}" style="position:absolute; left:-9999px;" alt="" /></div>`,
      },
    ],
  })
})
