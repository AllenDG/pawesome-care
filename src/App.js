import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import LoginRegister from "./components/pages/Auth/LoginRegister";
import ForgotPassword from "./components/pages/Auth/ForgotPassword";
import ResetPassword from "./components/pages/Auth/ResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="loginRegister" element={<LoginRegister />} />
            <Route path="forgotPassword" element={<ForgotPassword />} />
            <Route path="resetPassword/:token" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
