import React from "react"
import siteMeta from "../config/siteMeta"

const IndexPage = () => {
  return (
    <>
      <div>welcome to my blog</div>
    </>
  )
}

export function Head (){
  return <title>{siteMeta.title}</title>
}

export default IndexPage

