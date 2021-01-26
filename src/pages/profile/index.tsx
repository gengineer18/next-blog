import React from 'react'
import { NextHead, TheBreadcrumb } from '@/components/common/utils/organisms'
import { TProfile, TBreadcrumb } from '@/types'
import { GetStaticProps } from 'next'
import { apiKey } from '@/utils/common'
import { TheProfile } from '@/components/profile/organisms'
import { Box } from '@chakra-ui/react'
import { IconHome, IconProfile } from '@/utils/icons'

type Props = {
  profile: TProfile
}

export const getStaticProps: GetStaticProps = async () => {
  const data: TProfile = await fetch(`${process.env.API_PATH}/fixed/aboutme`, apiKey as RequestInit)
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      profile: data,
    },
  }
}

const Profile = ({ profile }: Props): JSX.Element => {
  const breadcrumbs: TBreadcrumb[] = [
    {
      name: 'ホーム',
      path: '/',
      icon: IconHome,
    },
    {
      name: profile.title,
      path: '',
      icon: IconProfile,
    },
  ]
  return (
    <>
      <NextHead title={`${profile.title} | Sorellina Coda Official Blog`} />
      <Box my={4}>
        <TheBreadcrumb breadcrumbs={breadcrumbs} />
      </Box>
      <TheProfile profile={profile} />
    </>
  )
}
export default Profile
