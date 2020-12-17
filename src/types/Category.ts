import { TCmsResponse } from '@/types'

type BaseCategory = {
  name: string
}

export type TCategory = TCmsResponse & BaseCategory
