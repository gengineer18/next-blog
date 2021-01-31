import React from 'react'
import Link from 'next/link'
import { TTag, TArticle } from '@/types'
import { Box, HStack } from '@chakra-ui/react'
import { IconTag } from '@/utils/icons'
import { AsideBox } from '../molecules'
import { AsideNumberListItem } from '../atoms'
import { useTags } from './hooks/useTags'
import { ArticleTag } from '../../article/atoms'

type Props = {
  tags: TTag[]
  articles: TArticle[]
}

export const AsideTags: React.FC<Props> = ({ tags, articles }) => (
  <AsideBox title='タグ' icon={IconTag}>
    <HStack spacing={0} wrap='wrap' shouldWrapChildren>
      {tags.map((tag) => (
        <Box mt={1} mr={2} key={tag.id}>
          <Link href={`/tags/${tag.id}`}>
            <a>
              <ArticleTag name={tag.name} />
            </a>
          </Link>
        </Box>
      ))}
    </HStack>
  </AsideBox>
)
