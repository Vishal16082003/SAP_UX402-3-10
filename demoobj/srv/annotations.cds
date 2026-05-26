using EmployeeService from '../srv/employee-service';

annotate EmployeeService.Employees with @(

    UI.HeaderInfo : {
        TypeName       : 'Employee',
        TypeNamePlural : 'Employees',
        Title : {
            Value : empName
        },
        Description : {
            Value : department
        }
    },

    UI.SelectionFields : [
        empName,
        department
    ],
    UI.LineItem : [
        {
            Value : empId,
            Label : 'Employee ID'
        },
        {
            Value : empName,
            Label : 'Employee Name'
        },
        {
            Value : department,
            Label : 'Department'
        },
        {
            Value : designation,
            Label : 'Designation'
        },
        {
            Value : salary,
            Label : 'Salary'
        },
        {
            Value :currency,
            Label :'Currency'
        }
    ],
 UI.Identification : [
        {
            Value : empId,
            Label : 'Employee ID'
        },
        {
            Value : empName,
            Label : 'Employee Name'
        },
        {
            Value : department,
            Label : 'Department'
        },
        {
            Value : designation,
            Label : 'Designation'
        },
        {
            Value : salary,
            Label : 'Salary'
        },
        {
            Value :currency,
            Label :'Currency'
        }
    ],

    UI.Facets : [
        {
            $Type  : 'UI.ReferenceFacet',
            Label  : 'General Information',
            Target : '@UI.Identification'
        }
    ]
);