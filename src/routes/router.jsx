import { createBrowserRouter } from 'react-router-dom';
import AboutMe from '../components/aboutMe/aboutMe';
import Home from '../components/home/home';
import Projects from '../components/projects/projects';
import Layout from '../components/layout'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/about-me",
    element: <Layout><AboutMe /></Layout>,
  },
  {
    path: "/projects",
    element: <Layout><Projects /></Layout>,
  },
]);

export default router;

