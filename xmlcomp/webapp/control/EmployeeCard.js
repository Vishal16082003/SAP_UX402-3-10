sap.ui.define([
    "sap/ui/core/XMLComposite"
], function(XMLComposite) {

    "use strict";

    return XMLComposite.extend(
        "demo.xml.xmlcomp.control.EmployeeCard",
        {

            metadata: {

                properties: {

                    empName: {
                        type: "string",
                        defaultValue: ""
                    },

                    empRole: {
                        type: "string",
                        defaultValue: ""
                    }

                }

            },

            onAfterRendering: function () {

                this.byId("txtName")
                    .setText("Name : " + this.getEmpName());

                this.byId("txtRole")
                    .setText("Role : " + this.getEmpRole());

            }

        }
    );

});