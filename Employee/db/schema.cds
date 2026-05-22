namespace my.emp;
using{
    cuid,
    managed
} from '@sap/cds/common';
entity EmployeeDetails: cuid, managed{
    EmpId :String(20);
    EmpFirstName : String(100);
     EmpLastName : String(100);
     EmpDeptName : String(100);
     EmpLoc : String(100);
     EmpSalary : Decimal(15,2);
     EmpRole : String(100);
   
}