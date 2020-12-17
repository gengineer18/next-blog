import { TCmsResponse } from '@/types'

type BaseTag = {
  name: string
}

export type TTag = TCmsResponse & BaseTag
