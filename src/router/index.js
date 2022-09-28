import About from "../pages/About";
import MainLayout from "../pages/MainLayout";
import NotFound from "../pages/NotFound";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const routes=[
    {path:'/', element: MainLayout, exact: true},
    {path:'/about', element: About, exact: true},
    {path:'/posts', element: Posts, exact: true},
    {path:"/posts/:id", element: PostIdPage, exact: true},
    {path:"*", element: NotFound, exact: true},
]