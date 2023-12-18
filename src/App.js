import Home               from "./pages/Home";
import LoadPage           from "./components/LoadPage";
import LoginPage          from "./pages/Login";
import React              from "react";
import Settings           from "./pages/Settings";
import Templates          from "./pages/Templates";
import Logs               from "./pages/Logs";
import { AuthButton }     from "./auth/AuthButton";
import { LogOutPage }     from "./pages/LogOutPages";
import { useCheckAuth }   from "./hooks/useCheckAuth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <AuthButton />
      <Routes>
        <Route exact path="/"      element={<LoadPage />}>
          <Route index             element={<Home />} />
          <Route path="/settings"  element={<ProtectedElement><Settings /></ProtectedElement>} />
          <Route path="/templates" element={<ProtectedElement><Templates /></ProtectedElement>} />
          <Route path="/logs"      element={<ProtectedElement><Logs /></ProtectedElement>} />
          <Route path="/logout"    element={<ProtectedElement><LogOutPage /></ProtectedElement>} />
          <Route path="/login"     element={ <LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const ProtectedElement = ({ children }) => {
  const { isLoggedIn } = useCheckAuth();
  return isLoggedIn ? children : <Navigate to="/login" />
}
export default App;
