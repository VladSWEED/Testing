import { FC } from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import { ROUTES } from '../../Constants/Routes';
import Employees from '../../Pages/Administrative/Employees';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import SliderDemo from '../../SliderDemo';

const Routes: FC = () => {
  return (
    <ReactRoutes>   
      <Route path={ROUTES.index} element={<Dashboard />} />
      <Route path={ROUTES.demo} element={<SliderDemo />} />
      <Route path={ROUTES.employees} element={<Employees />} />
    </ReactRoutes>
  );
};

export default Routes;
