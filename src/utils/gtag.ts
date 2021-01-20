import { Event } from '@/types'

export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
export const ADSENSE_ID = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID

// IDが取得できない場合を想定する
export const existsGaId = GA_ID !== ''
export const existsAdsenseId = ADSENSE_ID !== ''

// PVを測定する
export const pageview = (path: string): void => {
  window.gtag('config', GA_ID as string, {
    page_path: path,
  })
}

// GAイベントを発火させる
export const event = ({ action, category, label, value = '' }: Event): void => {
  if (!existsGaId) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  })
}
