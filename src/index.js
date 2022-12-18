import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './locale/i18n'
// import App from './App';
import reportWebVitals from './reportWebVitals';
import PageHeader from './components/PageHeader';
import Home from './Home';
import About from './About';
import Team from './Team';
import Services from './Services';
import Contacts from './Contacts';
import './index.css';
import 'normalize.css'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/team', element: <Team />},
  { path: '/services', element: <Services />},
  { path: '/contacts', element: <Contacts />},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageHeader />
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
