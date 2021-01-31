import dayjs from 'dayjs'

export const apiKey = {
  headers: { 'X-API-KEY': process.env.API_KEY },
}

export const baseW = '6xl'

export const dateToYYYYMMDD = (date: Date, format = 'YYYY年MM月DD日'): string => {
  const dateYYYYMMDD = dayjs(date).format(format)
  return dateYYYYMMDD
}

export const dateToYYYYMM = (date: Date, format: string): string => {
  const dateYYYYMM = dayjs(date).format(format)
  return dateYYYYMM
}

export const LIMIT_ARTICLES = 100
export const LIMIT_LATEST_ARTICLES = 5
export const LIMIT_CATEGORIES = 20
export const LIMIT_TAGS = 30
