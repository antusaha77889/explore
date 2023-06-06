import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Main from './Layout/Main';
import Friends from './Components/Friends/Friends';
import FriendDetai from './Components/FriendDetail/FriendDetai';
import Posts from './Components/Posts/Posts';
import PostDetail from './Components/PostDetail/PostDetail';
function App() {
  const router = createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
    {path:'/',element: <Home></Home>},
    {path:'home',element:<Home></Home>},
    {path:'Products',element:<Products></Products>},
    {path:'Friends',
    loader: async()=>{
      return fetch('https://jsonplaceholder.typicode.com/users')
    },
    element:<Friends></Friends>},
    {
      path:'/friend/:friendId',
      loader: async({params})=>{
        // console.log(params.friendId);
        return fetch (`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      element:<FriendDetai></FriendDetai>
    },
    {
      path:'posts',
      loader: async() =>{
        return fetch (`https://jsonplaceholder.typicode.com/posts`)
      },
      element:<Posts></Posts>
    },
    {
      path: '/post/:postId',
      loader: async({params})=>{
        return fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      element: <PostDetail></PostDetail>
    }
  ]
  },
    {path:'about',element:<About></About>},
    {path:'*',element:<div>This route not found:404</div>}
    
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
