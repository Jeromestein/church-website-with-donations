import { getRequestConfig } from "next-intl/server"

const locales = ["en", "zh"] as const

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? "en"
  const resolvedLocale = locales.includes(locale as (typeof locales)[number]) ? locale : "en"

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  }
})
