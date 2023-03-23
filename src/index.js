import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './proj/home'
import D1 from './proj/d1'
import D2 from './proj/d2'
import D3 from './proj/d3'
import D4 from './proj/d4'
import D5 from './proj/d5'
import D6 from './proj/d6'
import D7 from './proj/d7'
import D8 from './proj/d8'
import D9 from './proj/d9'
import D10 from './proj/d10'
import D11 from './proj/d11'
import D12 from './proj/d12'
import D13 from './proj/d13'
import D14 from './proj/d14'
import D15 from './proj/d15'
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> ,
  },
  {
    path: "/d1",
    element: <Home /> ,
  },
  {
    path: "/d2",
    element: <D2 /> ,
  },
  {
    path: "/d3",
    element: <D3 /> ,
  },
  {
    path: "/d4",
    element: <D4 /> ,
  },
  {
    path: "/d5",
    element: <D5 /> ,
  },
  {
    path: "/d6",
    element: <D6 /> ,
  },
  {
    path: "/d7",
    element: <D7 /> ,
  },
  {
    path: "/d8",
    element: <D8 /> ,
  },
  {
    path: "/d9",
    element: <D9 /> ,
  },
  {
    path: "/d10",
    element: <D10 /> ,
  },
  {
    path: "/d11",
    element: <D11 /> ,
  },
  {
    path: "/d12",
    element: <D12 /> ,
  },
  {
    path: "/d13",
    element: <D13 /> ,
  },
  {
    path: "/d14",
    element: <D14 /> ,
  },
  {
    path: "/d15",
    element: <D15 /> ,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

