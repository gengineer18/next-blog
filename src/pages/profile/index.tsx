import React from 'react'
import Head from 'next/head'
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
    <Head>
      <title>{`${profile.title} | Sorellina Coda Official Blog`}</title>
    </Head>
    <TheProfile profile={profile} />
  </>
)

export default Profile
