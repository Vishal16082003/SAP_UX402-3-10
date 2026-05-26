sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("demo.ux402demo.controller.App", {

        onPress: function () {
            alert("Button clicked successfully 🚀");
            console.log("Button press event triggered");
        }

    });
});