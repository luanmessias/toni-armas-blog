import React from 'react'
import 'react-notion/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'

import { NotionRenderer } from 'react-notion'

export async function getStaticProps() {
  const data = await fetch(
    'https://notion-api.splitbee.io/v1/page/4247d23bf42242449c0c3d972893d7c1'
  ).then(res => res.json())

  return {
    props: {
      blockMap: data
    }
  }
}
const QuemSomos = ({ blockMap }): JSX.Element => {
  return (
    <>
      <NotionRenderer blockMap={blockMap} />
    </>
  )
}

export default QuemSomos
