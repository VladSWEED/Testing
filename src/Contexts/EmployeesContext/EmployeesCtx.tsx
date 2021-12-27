import { FC, createContext, useContext, useReducer } from 'react';
import { 
  EmployeeAction, 
  EmployeesEnum, 
  EmployeeState, 
  EmployeeValue, 
  GetEmployeeAction, 
  GetEmployeeActionPayload 
} from './EmployeesCtx.types';

const initialState: EmployeeState = { isLoaded: false, employee: null };

const initialValue: EmployeeValue = { dispatch: () => {}, state: initialState };

const EmployeeContext = createContext(initialValue);

const reducer = (_state: EmployeeState, { type, payload }: EmployeeAction): EmployeeState => {
  switch(type) {
    case EmployeesEnum.GET_EMPLOYEE: {
      return { isLoaded: true, employee: payload };
    }
  }
}

export const EmployeeProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <EmployeeContext.Provider value={{ state, dispatch }}>{ children }</EmployeeContext.Provider>
}

const getEmployeeAction = (payload: GetEmployeeActionPayload): GetEmployeeAction => {
  return { type: EmployeesEnum.GET_EMPLOYEE, payload };
}

export const useEmployeeActions = () => {
  const { dispatch } = useContext(EmployeeContext);

  return {
    receiveEmployee: (payload: GetEmployeeActionPayload): void => {      
      const action = getEmployeeAction(payload);
      dispatch(action);
    }
  }
}

export const useEmployeeState = () => {
  const ctx = useContext(EmployeeContext);
  return ctx.state;
}

export const useIsAuthorized = () => {
  const ctx = useContext(EmployeeContext);
  return ctx.state.isLoaded && !!ctx.state.employee;
}
