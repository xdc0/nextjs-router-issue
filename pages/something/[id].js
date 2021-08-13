import { useRouter } from 'next/router'
import { useEffect, useLayoutEffect } from 'react'

function Container() {
  const router = useRouter();

  useEffect(() => {
    console.log(JSON.stringify({
      isReady: router.isReady,
      query: router.query
    }, null, 2))
  }, [router.query])

  return (<h1>Hello world</h1>);
}

export async function getStaticPaths() {
  return {
    paths: [
      '/something/new'
    ],
    fallback: true
  }
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      hello: "world"
    }
  }
}

export default Container;