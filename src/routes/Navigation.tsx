import { 
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate
} from "react-router-dom"

import { FormikAbstract } from "../03-forms/pages/FormikAbstract";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
import { FormikComponents } from '../03-forms/pages/FormikComponents';
import { FormikYupPage } from "../03-forms/pages/FormikYupPage";
import { RegisterPage } from "../03-forms/pages/RegisterPage";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={ logo } alt="react logo" />
          <ul>
            <li>
              <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Register page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstract" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstract</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="home" element={ <h1>Home page</h1> } />
          <Route path="register" element={ <RegisterPage /> } />
          <Route path="formik-basic" element={ <FormikBasicPage /> } />
          <Route path="formik-yup" element={ <FormikYupPage /> } />
          <Route path="formik-components" element={ <FormikComponents /> } />
          <Route path="formik-abstract" element={ <FormikAbstract /> } />
          <Route path="about" element={ <h1>About page</h1> } />
          <Route path="users" element={ <h1>Users page</h1> } />

          <Route path="/*" element={ <Navigate to="/home" replace /> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
