import { TCmsResponse } from '@/types'

type BaseTag = {
  name: string
  count?: number
}

export type TTag = TCmsResponse & BaseTag
