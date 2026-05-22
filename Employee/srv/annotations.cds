using CatalogService from './service';

annotate CatalogService.EmployeeDetails with @(

    UI.HeaderInfo : {
        TypeName : 'Employee Detail',
        TypeNamePlural : 'Employee Detail',

        Title : {
            $Type : 'UI.DataField',
            Value : EmpId
        }
    },
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : EmpId,
            Label : 'Employee Id'
        },
        {
            $Type : 'UI.DataField',
            Value : EmpFirstName,
            Label : 'Employee First Name'
        },
        {
            $Type : 'UI.DataField',
            Value : EmpLastName,
            Label : 'Employee Last Name'
        },
        {
            $Type : 'UI.DataField',
            Value : EmpDeptName,
            Label : 'Employee Department Name'
        },
        {
            $Type : 'UI.DataField',
            Value : EmpLoc,
            Label : 'Employee Location'
        },
        {
            $Type : 'UI.DataField',
            Value : EmpSalary,
            Label : 'Employee Salary'
        },
        {
            $Type : 'UI.DataField',
            Value : EmpRole,
            Label : 'Employee Role'
        }
        
    ],

    UI.SelectionFields : [
        EmpFirstName,
        EmpRole
    ],
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'General Information',
            Target : '@UI.FieldGroup#General'
        }
    ],
    UI.FieldGroup #General : {
        Data :[
             {
            $Type : 'UI.DataField',
            Value : EmpId,
            Label : 'Employee Id'
        },
        {
            $Type : 'UI.DataField',
            Value : EmpFirstName,
            Label : 'Employee First Name'
        },
        {
            $Type : 'UI.DataField',
            Value : EmpLastName,
            Label : 'Employee Last Name'
        },
        {
            $Type : 'UI.DataField',
            Value : EmpDeptName,
            Label : 'Employee Department Name'
        },
        {
            $Type : 'UI.DataField',
            Value : EmpLoc,
            Label : 'Employee Location'
        },
        {
            $Type : 'UI.DataField',
            Value : EmpSalary,
            Label : 'Employee Salary'
        },
        {
            $Type : 'UI.DataField',
            Value : EmpRole,
            Label : 'Employee Role'
        }

        ]
    }

);