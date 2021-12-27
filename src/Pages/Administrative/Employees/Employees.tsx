/* eslint-disable no-console */
import { FC } from 'react';
import { useEmployeeState } from '../../../Contexts/EmployeesContext/EmployeesCtx';

const Employees: FC = () => { 
  const { isLoaded, employee } = useEmployeeState();
  console.log(isLoaded, employee);  
  
  return (
    <div>Employees</div>
  )
};

export default Employees;