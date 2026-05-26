sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, JSONModel, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("demo.prod.controller.Product", {

        sBaseUrl: "https://mtsapserver6g.themdlabs.com:44300/sap/opu/odata4/sap/zui_product_007_04/srvd/sap/zui_product_007/0001",

        onInit: function () {
            this.loadProducts();
        },
 loadProducts: function () {
            var oModel = new JSONModel();
            var that = this;
 },
 onSubmit: function () {

            var sProductId = this.byId("productId").getValue();
            var sProductName = this.byId("productName").getValue();
            var sPrice = this.byId("price").getValue();
            var sCurrency = this.byId("currency").getValue();

            var oPayload = {
                product_id: sProductId,
                product_name: sProductName,
                price: parseFloat(sPrice),
                currency: sCurrency
            };

            var that = this;

$.ajax({
                url: this.sBaseUrl,
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(oPayload),

                headers: {
                    "Content-Type": "application/json"
                },

                success: function () {
                    MessageToast.show("Product Created Successfully");
                    that.loadProducts();
                    that.clearFields();
                },

                error: function (oError) {
                    MessageBox.error("Create Failed");
                    console.log(oError);
                }
            });
        },
      });
    });