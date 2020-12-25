import { TCmsResponse } from '@/types'

type BaseCategory = {
  name: string
  count?: number
}

export type TCategory = TCmsResponse & BaseCategory
