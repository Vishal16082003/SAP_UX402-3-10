sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("demo.controller.Main", {

        value: 0,

        onAdd: function () {
            this.value = this.value + 10;
            this.byId("txtMessage").setText(this.value.toString());
        },

        onSubtract: function () {
            this.value = this.value - 5;
            this.byId("txtMessage").setText(this.value.toString());
        },

        onMultiply: function () {
            this.value = this.value * 2;
            this.byId("txtMessage").setText(this.value.toString());
        },
onReset: function () {
            this.value = 0;
            this.byId("txtMessage").setText("0");
        }

    });
});