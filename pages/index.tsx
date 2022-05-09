import React from 'react'
import { Layout } from '@components/Layout'
import { getAuthorList } from '@api'
import { PlantCollection } from '@components/PlantCollection'

export const getStaticProps = async () => {
  const plants = await getAuthorList()
  return {
    props: {
      plants,
    }
  }
}

export default function Home({ plants }) {
  return (
    <Layout>
      <PlantCollection plants={plants} variant="square"/>
    </Layout>
  )
}
