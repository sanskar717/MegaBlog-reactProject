import React from "react"
import { useDispatch } from "react-redux"
import authService from "../../appwrite/confapp"
import { logout } from "../../store/authSlice"

function LogoutBtn() {
    const disptch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            disptch(logout())
        })
    }

    return (
        <button
            className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn
