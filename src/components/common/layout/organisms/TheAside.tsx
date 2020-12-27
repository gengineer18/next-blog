import React from 'react'
import { Stack } from '@chakra-ui/react'
import { TCmsItems } from '@/types'
import { AsideCategories, AsideLatestItems, AsideProfile, AsideTags, AsideArchives } from '../../aside/organisms'

export const TheAside: React.FC<TCmsItems> = ({ cmsItems }) => (
  <Stack spacing={8}>
    <AsideProfile />
    <AsideLatestItems latestArticles={cmsItems.articles} />
    <AsideCategories categories={cmsItems.categories} articles={cmsItems.articles} />
    <AsideTags tags={cmsItems.tags} articles={cmsItems.articles} />
    <AsideArchives articles={cmsItems.articles} />
  </Stack>
)
