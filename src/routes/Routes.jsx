import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import ConvertPage from '../components/ConvertPage/ConvertPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/convert',
    element: <ConvertPage />,
  },
]);
export default routes;
