import dayjs from 'dayjs'

export const apiKey = {
  headers: { 'X-API-KEY': process.env.API_KEY },
}

export const baseW = '6xl'

export const dateToYYYYMMDD = (date: Date): string => {
  const dateYYYYMMDD = dayjs(date).format('YYYY年MM月DD日')
  return dateYYYYMMDD
}
