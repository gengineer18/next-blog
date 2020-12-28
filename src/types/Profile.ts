import { TCmsResponse } from '@/types'

type BaseProfile = {
  title: string
  mainImage?: {
    url: string
  }
  contents: string
  intro: string
  body: string
  description: string
}

export type TProfile = TCmsResponse & BaseProfile
