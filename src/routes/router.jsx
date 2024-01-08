import { createBrowserRouter } from 'react-router-dom';
import AboutMe from '../components/aboutMe/aboutMe';
import Home from '../components/home/home';
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
]);

export default router;

