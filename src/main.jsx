import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Component/Error/Error';
import Home from './Component/Home/Home';
import FirstPage from './Component/FirstPage/FirstPage';
import About from './Component/About/About';
import Help from './Component/Help/Help';
import Contact from './Component/Contact/Contact';
import Friends from './Component/Friends/Friends';
import FriendsDetails from './Component/FriendDetails/FriendsDetails';
import Posts from './Component/Posts/Posts';
import PostDetails from './Component/PostDetails/PostDetails';
import Notfound from './Component/Notfound/Notfound';

const router =createBrowserRouter([
  
 {
      path: "/",
      element:  <Home />,
      errorElement:<Error></Error>,
 
  children: [
    {
      path: "/",
      element: <FirstPage />,
    },
    {
      path: "/about",
      element: <About />,
    },

    {
path:"posts",
element:<Posts></Posts>,
loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
    },
    {
path:"posts/:postId",
element:<PostDetails></PostDetails>,
loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

    },
    {
      path:"/friends",
      element:<Friends></Friends>,
      loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
          },
    {
path:"friends/:friendId",
element:<FriendsDetails></FriendsDetails>,
loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)

    },
    {
      path: "/help",
      element: <Help />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element:<Notfound></Notfound>,
    },
  ],
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
