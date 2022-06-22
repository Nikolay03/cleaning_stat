import React from 'react'
import Layout from '../../layout/Layout'
import HomeGrid from '../../view/Home/HomeGrid'

const HomeContainer = props => {
  return (
    <Layout withPadding={false}>
      <HomeGrid />
    </Layout>
  )
}

export default HomeContainer
