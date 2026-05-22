// sap.ui.define([
//     "sap/ui/core/UIComponent",
//     "demo/login/loginpage/model/models"
// ], (UIComponent, models) => {
//     "use strict";

//     return UIComponent.extend("demo.login.loginpage.Component", {
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
  "sap/ui/core/UIComponent"
], function (UIComponent) {
  "use strict";

  return UIComponent.extend("demo.login.loginpage.Component", {
    metadata: {
      manifest: "json"
    },

    createContent: function () {
      return sap.ui.view({
        viewName: "demo.login.loginpage.view.App",
        type: sap.ui.core.mvc.ViewType.XML
      });
    }
  });
});