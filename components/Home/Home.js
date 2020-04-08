import React, { Fragment } from 'react'
import { Button } from 'antd'
import Link from 'next/link'
import Layout from '../Layout'

const Home = () => (
  <Layout>
    <Fragment>
      <h1>Hello Bzh</h1>
      <Link href="/user">
        <Button size="large" type="primary">用户</Button>
      </Link>
    </Fragment>
  </Layout>

)

export default Home
