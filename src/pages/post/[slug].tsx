import React from 'react'
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { NotionRenderer } from "react-notion";

export async function getStaticProps() {
  const data = await fetch(
    `https://notion-api.splitbee.io/v1/page/${slug}`
  ).then(res => res.json());

  return {
    props: {
      blockMap: data
    }
  };
}


const QuemSomos = ({blockMap}): JSX.Element => {
  {console.log(blockMap)}
  return (
    <>
      <NotionRenderer blockMap={blockMap} />
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false
  }
}

export default QuemSomos





