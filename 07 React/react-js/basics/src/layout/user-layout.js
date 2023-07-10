import React from 'react'
import { Header } from '../components'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    )
}

export default UserLayout