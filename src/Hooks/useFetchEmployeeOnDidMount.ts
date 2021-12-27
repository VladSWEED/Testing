import { useEffect } from 'react';
import EmployeesApi from '../API/Employees';
import { useEmployeeState, useEmployeeActions } from './../Contexts/EmployeesContext/EmployeesCtx';

const useFetchEmployeeOnDidMount = () => {
  const { isLoaded } = useEmployeeState();
  const { receiveEmployee } = useEmployeeActions();

  useEffect(() => {
    let isMounted = true; 

    if(isLoaded) {
      return null;
    }

    const fetchEmployee = async () => {
      try {
        const res = await EmployeesApi.getUsers();        
        if (isMounted) {
          receiveEmployee(res.data || {});
        }
      } catch (error) {        
        // eslint-disable-next-line no-console
        console.log('ERROR FETCHING EMPLOYEES: ', error);              
      }
    }

    fetchEmployee();

    return () => { isMounted = false };
  }, [])
}

export default useFetchEmployeeOnDidMount;