import { createBrowserRouter } from 'react-router-dom';
import AboutMe from '../components/aboutMe/aboutMe';
import Home from '../components/home/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-me",
    element: <AboutMe />,
  },
  // {
  //   path: "/projects",
  //   element: <Projects />,
  // },
  // {
  //   path: "/contactMe",
  //   element: <Contact />,
  // },
  // {
  //   path: "/resume",
  //   element: <Resume />,
  // }

]);

export default router;
