import { TProfile } from '@/types'
import React from 'react'
import { Box } from '@chakra-ui/react'
import { ArticleTitle } from '@/components/common/article/atoms'
import { ArticleBody } from '@/components/article/atoms'

type Props = {
  profile: TProfile
}

export const TheProfile = ({ profile }: Props): JSX.Element => (
  <article>
    <Box mb={2}>
      <ArticleTitle title={profile.title} size='xl' />
    </Box>
    <ArticleBody body={profile.body} />
  </article>
)
