import React from 'react'
import Head from 'next/head'

const HeadApp: React.FC = () => {
  return (
    <Head>
      <meta charset="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>Toni Armas</title>

      <link rel="manifest" href="/manifest.json" />
      <link
        href="pwa/icons/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="pwa/icons/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <meta name="theme-color" content="#272727" />
    </Head>
  )
}

export default HeadApp
