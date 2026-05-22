// sap.ui.define([
//     "sap/ui/core/UIComponent",
//     "demo/mock/mocky/model/models"
// ], (UIComponent, models) => {
//     "use strict";

//     return UIComponent.extend("demo.mock.mocky.Component", {
//         metadata: {
//             manifest: "json",
//             interfaces: [
//                 "sap.ui.core.IAsyncContentCreation"
//             ]
//         },

//         init() {
//             // call the base component's init function
//             UIComponent.prototype.init.apply(this, arguments);

//             // set the device model
//             this.setModel(models.createDeviceModel(), "device");

//             // enable routing
//             this.getRouter().initialize();
//         }
//     });
// });
sap.ui.define([
    "sap/ui/core/UIComponent",
    "demo/mock/mocky/localService/mockserver"
], function (UIComponent, mockserver) {

    "use strict";

    return UIComponent.extend("demo.mock.mocky.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {

            // Start Mock Server
            mockserver.init();

            UIComponent.prototype.init.apply(this, arguments);
        }
    });
});