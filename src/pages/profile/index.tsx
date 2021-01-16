import React from 'react'
import { NextHead } from '@/components/common/utils/organisms/NextHead'
import { TProfile } from '@/types'
import { GetStaticProps } from 'next'
import { apiKey } from '@/utils/common'
import { TheProfile } from '@/components/profile/organisms'

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

const Profile = ({ profile }: Props): JSX.Element => (
  <>
    <NextHead title={`${profile.title} | Sorellina Coda Official Blog`} />
    <TheProfile profile={profile} />
  </>
)

export default Profile
