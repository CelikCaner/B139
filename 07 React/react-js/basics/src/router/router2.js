import React from 'react'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { HomePage } from '../pages'
import UserLayout from '../layout/user-layout'
import { Apples, Bananas1, ExternalModuleStyling, ExternalStyling, InlineStyling, InternalStyling, Jsx1, Jsx2, Jsx3, Jsx4, Orange, ReactRouterDom, RouterParams, SassScss } from '../components'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} />
            <Route path="/jsx">
                <Route path=":userId" element={<Jsx1 />} />
            </Route>
            <Route path="/styles">
                <Route index element={<InlineStyling />} />
                <Route path="inline" element={<InlineStyling />} />
                <Route path="internal" element={<InternalStyling />} />
                <Route path="external" element={<ExternalStyling />} />
                <Route path="external-module" element={<ExternalModuleStyling />} />
                <Route path="sass-scss" element={<SassScss />} />
            </Route>

            <Route path="/router-params">
                <Route index element={<ReactRouterDom />} />
                <Route path=":userId" element={<RouterParams />} />
            </Route>
        </>
    )

    //     [
    //     {
    //         path: "/",
    //         element: <HomePage />
    //     },
    //     {
    //         path: "/fruits",
    //         element: <UserLayout />,
    //         children: [
    //             {
    //                 path: "apples",
    //                 element: <Apples />
    //             },
    //             {
    //                 path: "bananas1",
    //                 element: <Bananas1 />
    //             },
    //             {
    //                 path: "orange",
    //                 element: <Orange />
    //             }
    //         ]
    //     },
    //     {
    //         path: "/jsx",
    //         children: [
    //             {
    //                 index: true,
    //                 element: <Jsx1 />
    //             },
    //             {
    //                 path: "1",
    //                 element: <Jsx1 />
    //             },
    //             {
    //                 path: "2",
    //                 element: <Jsx2 />
    //             },
    //             {
    //                 path: "3",
    //                 element: <Jsx3 />
    //             },
    //             {
    //                 path: "4",
    //                 element: <Jsx4 />
    //             }
    //         ]
    //     }
    // ]


)

const AppRouter2 = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter2