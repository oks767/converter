import { createBrowserRouter } from 'react-router-dom';
import Profile from '../components/Profile/Profile';
import ConvertPage from '../components/ConvertPage/ConvertPage';
import Home from '../components/Home/Home';
import Auth from '../components/Auth/Auth';
import Settings from '../components/Settings/Settings';

const routes = createBrowserRouter([
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/convert',
    element: <ConvertPage />,
  },
  {
    path: '/',
    element: (
      <Home
        bgButton='/public/right-arrow.svg'
        heading='Start your currently journal'
        bgImage='/public/bg-home.jpg'
      />
    ),
  },
  {
    path: '/auth',
    element: <Auth bgImage='/public/checked.svg' />,
  },
  {
    path: '/settings',
    element: <Settings bgImage='/public/profile.svg' />,
  },
]);
export default routes;
