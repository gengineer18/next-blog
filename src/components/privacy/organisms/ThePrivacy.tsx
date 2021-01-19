import { TPrivacy } from '@/types'
import React from 'react'
import { Box } from '@chakra-ui/react'
import { ArticleTitle } from '@/components/common/article/atoms'
import { ArticleBody } from '@/components/article/atoms'

type Props = {
  privacy: TPrivacy
}

export const ThePrivacy = ({ privacy }: Props): JSX.Element => (
  <article>
    <Box mb={4}>
      <ArticleTitle title={privacy.title} size='xl' />
    </Box>
    <ArticleBody body={privacy.body} />
  </article>
)
