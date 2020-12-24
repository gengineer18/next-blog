import React from 'react'
import { Stack } from '@chakra-ui/react'
import { TCmsItems } from '@/types'
import { AsideCategories, AsideLatestItems, AsideProfile, AsideTags } from '../../aside/organisms'

export const TheAside: React.FC<TCmsItems> = ({ cmsItems }) => (
  <Stack spacing={8}>
    <AsideProfile />
    <AsideLatestItems latestArticles={cmsItems.latestArticles} />
    <AsideCategories categories={cmsItems.categories} />
    <AsideTags />
  </Stack>
)
