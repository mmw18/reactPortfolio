import { createBrowserRouter } from 'react-router-dom';
import AboutMe from '../components/aboutMe/aboutMe';

const router = createBrowserRouter([
  {
    path: "/",
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
