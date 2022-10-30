import React from "react"
// import Layout from "../../components/Layout"
import { useSelector, /*useDispatch*/ } from 'react-redux';
// import {setPost, incrementAsync} from '../../store/test'
import { posts } from "../../store/storeEnum";


const IndexPage = () => {
    const post = useSelector((state)=>state[posts])
    // const dispatch = useDispatch();
    console.log(post)
  return (
    <>
      {/*<div onClick={()=>{*/}
      {/*    // dispatch(setPost([1,2]))*/}
      {/*    dispatch(incrementAsync())*/}
      {/*}}>welcome to my blog</div>*/}
        <div>{post.map((v)=>{
            return <div key={v}>{v}</div>
        })}</div>
    </>
  )
}

export const Head = ({pageContext}) => <title>{pageContext.title}</title>

export default IndexPage

