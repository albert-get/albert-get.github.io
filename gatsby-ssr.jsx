import React from "react"
import { Provider } from "react-redux"
import {store} from "./src/store"
import def from './src/images/unikitty-halloween-unikitty-and-puppycorn-cursor.png'
import act from './src/images/unikitty-halloween-unikitty-and-puppycorn-pointer.png'
import { Helmet } from 'react-helmet'
import siteMeta from "./src/config/siteMeta"

export const wrapRootElement = ({ element }) => {
    
    
    return (
        <>
            <Helmet>
                <style>
                    {`
                        html:active{
                            cursor:url(${act}),pointer;
                        }
                        html{
                            cursor:url(${def}),default;
                        }
                    `}
                </style>
            </Helmet>
            <Provider store={store}>
                {element}
            </Provider>
        </>
    )
}

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
      <link
        rel="preload"
        href="/TengXiangBoDangXingShuJianTi-2.ttf"
        as="font"
        crossOrigin="anonymous"
        key="interFont"
      />,
    ])
  }



