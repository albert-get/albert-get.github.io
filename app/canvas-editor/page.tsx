"use client"

import dynamic from "next/dynamic"

//canvas editor依然有客户端的eval，所以需要一个组件从导入到渲染都是在客户端，只有把组件拆分出去，用import导入，组件才是全部
//在客户端，如果不用import，那导入就任然是会在服务端
export default dynamic(() => import('./editor'),{ssr:false})