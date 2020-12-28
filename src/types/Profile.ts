import { TCmsResponse } from '@/types'

type BaseProfile = {
  title: string
  body: string
}

export type TProfile = TCmsResponse & BaseProfile
