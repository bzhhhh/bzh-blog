import React, { Fragment } from 'react'
import Head from 'next/head'
import Header from './Header'

export default ({ title, children }) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet='utf-8' />
      <link rel="icon" href="/favicon.ico" />
      <title>bzh</title>
    </Head>
    <Header title={title} />
    <div className='content-container'>
      {children}
    </div>
    <style jsx global>{`
      .content-container {
        width: 66%;
        margin: auto;
      }
    `}</style>
  </Fragment>
)