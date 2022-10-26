import React from "react"
import Layout from "../components/Layout"


const IndexPage = () => {
  return (
    <Layout>
      <div>welcome to my blog</div>

    </Layout>
  )
}

export const Head = ({pageContext}) => <title>{pageContext.title}</title>

export default IndexPage

