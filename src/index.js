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
import MPageHeader from './components/MPageHeader';
import Home from './Home';
import MHome from './mobile/Home'
import About from './About';
import MAbout from './mobile/About'
import Team from './Team';
import MTeam from './mobile/Team'
import Services from './Services';
import MServices from './mobile/Services'
import Contacts from './Contacts';
import MContacts from './mobile/Contacts'
import './index.css';
import 'normalize.css'

const router = document.body.clientWidth > 1200 ? createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/team', element: <Team />},
  { path: '/services', element: <Services />},
  { path: '/contacts', element: <Contacts />},
]) : createBrowserRouter([
  { path: '/', element: <MHome /> },
  { path: '/about', element: <MAbout /> },
  { path: '/team', element: <MTeam />},
  { path: '/services', element: <MServices />},
  { path: '/contacts', element: <MContacts />},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {document.body.clientWidth > 1200 ? <PageHeader /> : <MPageHeader />}
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
