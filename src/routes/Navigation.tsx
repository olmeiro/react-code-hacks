import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import { routes } from "./routes";

import logo from "../assets/logo.svg";



export const Navigation = () => {
  return (
   <Suspense fallback={<span>Loading...</span>} >
     <BrowserRouter>
       <div className="main-layout">
         <nav>
           <img src={logo} alt="React Logo" />
           <ul>
             {routes.map(({to, name}) => {
               return (
                 <li key={to}>
                   <NavLink
                     to={to}
                     className={({ isActive }) => (isActive ? "nav-active" : "")}
                   >
                     {name}
                   </NavLink>
                 </li>
               );
             })}
           </ul>
         </nav>
    
         <Routes>
           {routes.map((route) => {
             return (
               <Route
                 key={route.to}
                 path={route.path}
                 element={<route.Component />}
               />
             );
           })}
    
           <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
         </Routes>
       </div>
     </BrowserRouter>
   </Suspense>
  );
};
