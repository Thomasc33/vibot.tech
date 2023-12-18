import LoginPage        from    "../pages/Login";
import { AuthPage }     from    "./AuthPage";
import { useCheckAuth } from    "../hooks/useCheckAuth";

export const AuthButton = () => {
    const { isLoggedIn } = useCheckAuth();
    let path = window.location.pathname;

    if (path.startsWith('/auth')) return <AuthPage />
    if (path.startsWith('/login')) return <LoginPage />

    return isLoggedIn ? (null) : (
        <LoginPage />
    );
}