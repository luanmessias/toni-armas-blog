import React from 'react'

import 'react-notion/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'

export async function getStaticProps() {
  const data = await fetch(
    'https://notion-api.splitbee.io/v1/table/56e15fc6a74f4ca7b44bae84601996f9'
  ).then(res => res.json())

  return {
    props: {
      blockMap: data
    }
  }
}
const Contact = (blockMap): React.ReactElement => {
  return (
    <>
      <h1>CONTACT</h1>
    </>
  )
}

export default Contact
