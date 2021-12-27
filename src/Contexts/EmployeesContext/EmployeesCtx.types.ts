import { Dispatch } from 'react';
import { Employee } from '../../Types/EmployeeTypes';

export enum EmployeesEnum {
  GET_EMPLOYEE = "GET_EMPLOYEE"
}

export type GetEmployeeActionPayload = Employee | null;

export type GetEmployeeAction = { type: EmployeesEnum.GET_EMPLOYEE; payload: GetEmployeeActionPayload };

export type EmployeeAction = GetEmployeeAction;

export type EmployeeState = { isLoaded: boolean, employee: GetEmployeeActionPayload };

export type EmployeeValue = { dispatch: Dispatch<GetEmployeeAction>, state: EmployeeState };
