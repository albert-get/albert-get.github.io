import React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <div>welcome to my blog</div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>lenchif's blog</title>
