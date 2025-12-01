/**
 * Nuxt module configuration for Yandex.Metrika
 */
export interface ModuleOptions {
  /**
   * Yandex.Metrika counter ID
   * @example 12345678
   */
  id?: number | string

  /**
   * Enable or disable the module
   * @default true
   */
  enabled?: boolean

  /**
   * Debug mode for logging events
   * @default false
   */
  debug?: boolean

  /**
   * Enable click map
   * @default false
   */
  clickmap?: boolean

  /**
   * Track external links
   * @default false
   */
  trackLinks?: boolean

  /**
   * Accurate bounce rate tracking
   * Can be boolean or number (time in milliseconds)
   * @default false
   */
  accurateTrackBounce?: boolean | number

  /**
   * Enable webvisor (session recording)
   * @default false
   */
  webvisor?: boolean

  /**
   * Track hash in URL
   * @default false
   */
  trackHash?: boolean
}
