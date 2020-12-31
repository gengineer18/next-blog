import React from 'react'
import { Stack, Box } from '@chakra-ui/react'
import { TCmsItems } from '@/types'
import styled from '@emotion/styled'
import { AsideCategories, AsideLatestItems, AsideProfile, AsideTags, AsideArchives } from '../../aside/organisms'
import { PageTopButton } from '../../aside/atoms'

const STPageTop = styled(Box)`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
`

export const TheAside: React.FC<TCmsItems> = ({ cmsItems }) => (
  <>
    <Stack spacing={8}>
      <AsideProfile />
      <AsideLatestItems latestArticles={cmsItems.articles} />
      <AsideCategories categories={cmsItems.categories} articles={cmsItems.articles} />
      <AsideTags tags={cmsItems.tags} articles={cmsItems.articles} />
      <AsideArchives articles={cmsItems.articles} />
    </Stack>
    <STPageTop position='fixed' right='8rem' bottom='2rem'>
      <PageTopButton />
    </STPageTop>
  </>
)
