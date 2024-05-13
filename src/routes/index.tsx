import { useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/Main.layout';
import Homepage from '../pages/homepage';

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: '', element: <Homepage /> }],
    },
  ]);
}
