import { Navigate } from "react-router-dom"

export const LogOutPage = () => {
    localStorage.clear()
    return <Navigate to='/login' />
}
