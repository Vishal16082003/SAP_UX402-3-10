sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("demo.mock.mocky.controller.Main", {

        onInit: function () {
            console.log("Main Controller Initialized");
        }
    });
});