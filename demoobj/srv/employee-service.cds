using {demo.obj as my } from '../db/schema';
service EmployeeService{
    @odata.draft.enabled 
    entity Employees as projection on my.Employees;
}