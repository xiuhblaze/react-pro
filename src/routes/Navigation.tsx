import { Suspense } from 'react';
import { 
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span> }>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={ logo } alt="react logo" />
            <ul>
              {
                routes.map((route) => {
                  return (
                    <li key={ route.name }>
                      <NavLink to={ route.to } className={ ({ isActive }) => isActive ? 'nav-active' : ''}>{ route.name }</NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
          <Routes>
            {
              // routes.map((route) => {
              //   return <Route key={ route.name } path={ route.path } element={ route.Component() } />
              // }) // Estas dos instrucciones son iguales
              routes.map((route) => (
                <Route key={ route.name } path={ route.path } element={ <route.Component /> } />
              ))
            }
            <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
