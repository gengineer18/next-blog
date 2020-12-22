import React from 'react'
import { Stack } from '@chakra-ui/react'
import { AsideCategories, AsideLatestItems, AsideProfile, AsideTags } from '../../aside/organisms'

export const TheAside: React.FC = () => (
  <Stack spacing={8}>
    <AsideProfile />
    <AsideLatestItems />
    <AsideCategories />
    <AsideTags />
  </Stack>
)
