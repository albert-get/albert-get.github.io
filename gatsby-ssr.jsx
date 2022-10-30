import React from "react"
import { Provider } from "react-redux"
import {store} from "./src/store"
import def from './src/images/unikitty-halloween-unikitty-and-puppycorn-cursor.png'
import act from './src/images/unikitty-halloween-unikitty-and-puppycorn-pointer.png'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './src/style/global.css'

export const wrapRootElement = ({ element }) => {
    
    const helmetContext = {};
    
    return (
        <>
            <HelmetProvider context={helmetContext}>
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
            </HelmetProvider>
        </>
    )
}


