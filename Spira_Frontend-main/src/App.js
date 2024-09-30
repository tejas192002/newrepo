import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Enquires from "./Pages/SalesTracker/Enquires/Enquires";
import "./App.css";
import User from "./Pages/User/User";
import Login from "./Pages/Login-Register/Login";
import NavbarController from "./Utils/NavController/NavbarController";
import MainHome from "./Pages/MainHome/MainHome";
import ProtectedRoutes from "./Utils/Auth/ProtectedRoutes";

const App = () => {
  return (
    <div>
      <NavbarController
        allowedPaths={[
          "/",
          "/Login",
          "/Register",
          "/PasswordReset",
          "/EmailVerify",
        ]}
      >
        <MainHome />
      </NavbarController>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />

          <Route path="/enquires" element={<Enquires />} />
          <Route path="/User" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";
// import User from "./Pages/User/User";
// import Login from "./Pages/Login-Register/Login";
// import Navbar from "./Components/navbar/Navbar";
// import SideBar from "./Components/sidebar/SideBar";
// import Footer from "./Components/footer/Footer";
// import Home from "./Pages/Home/Home";
// import Enquires from "./Pages/SalesTracker/Enquires/Enquires";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const loginComponent = (
//     <Login
//       onLogin={handleLogin}
//       allowedPaths={[
//         "/Login",
//         "/Register",
//         "/PasswordReset",
//         "/EmailVerify",
//       ]}
//     />
//   );

//   return (
//     <div>
//       {isLoggedIn ? (
//         <>
//           <div className="app-container">
//             <Navbar />
//             <div className="main-container">
//               <SideBar />
//               <div className="content">
//                 <Routes>
//                   <Route path="/" element={<Navigate to="/User" />} />
//                   <Route path="/home" element={<Home />} />
//                   <Route path="/enquires" element={<Enquires />} />
//                   <Route path="/User" element={<User />} />
//                 </Routes>
//               </div>
//             </div>
//           </div>
//           <Footer />
//         </>
//       ) : (
//         <Routes>
//           <Route path="/*" element={loginComponent} />
//           <Route path="/User" element={<Navigate to="/" replace />} />
//         </Routes>
//       )}
//     </div>
//   );
// };

// export default App;
