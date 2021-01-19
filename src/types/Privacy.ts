import { TCmsResponse } from '@/types'

type BasePrivacy = {
  title: string
  body: string
}

export type TPrivacy = TCmsResponse & BasePrivacy
