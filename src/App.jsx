import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userDeta) => {
                if (userDeta) {
                    dispatch(login({ userDeta }))
                } else {
                    dispatch(logout())
                }
            })
            .finally(() => setLoading(false))
    }, [])

    return !loading ? (
        <div className="min-h-screen flex flex-wrap content-between bg-gray-300">
            <div className="w-full block">
                <Header />
                <main>s
                    ToDo: <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    ) : null
}

export default App
