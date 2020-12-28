import { TProfile } from '@/types'
import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import { ArticleTitle, ArticleImage } from '@/components/common/article/atoms'
import { ArticleBody } from '@/components/article/atoms'
import { ArticleContentsBox } from '@/components/article/molecules'

type Props = {
  profile: TProfile
}

export const TheProfile = ({ profile }: Props): JSX.Element => (
  <article>
    {profile.mainImage && (
      <Center mb={6}>
        <ArticleImage imageUrl={profile.mainImage.url} width={500} height={250} />
      </Center>
    )}
    <Box mb={2}>
      <ArticleTitle title={profile.title} size='xl' />
    </Box>
    <Box mb={2}>
      <ArticleBody body={profile.intro} />
    </Box>
    <Box mb={8}>
      <ArticleContentsBox contents={profile.contents} />
    </Box>
    <ArticleBody body={profile.body} />
  </article>
)
