// sap.ui.define([
//   "sap/ui/core/mvc/Controller"
// ], (BaseController) => {
//   "use strict";

//   return BaseController.extend("demo.login.loginpage.controller.App", {
//       onInit() {
//       }
//   });
// });
sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
  "use strict";

  return Controller.extend("demo.login.loginpage.controller.App", {

    onSubmit: function () {

      var email = this.byId("email").getValue();
      var password = this.byId("password").getValue();

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        MessageBox.error("Email is required");
        return;
      }

      if (!emailPattern.test(email)) {
        MessageBox.error("Enter a valid email (example@domain.com)");
        return;
      }

      if (!password) {
        MessageBox.error("Password is required");
        return;
      }

      if (password.length < 6) {
        MessageBox.error("Password must be at least 6 characters");
        return;
      }

      MessageToast.show("Login Successful");

    },

    onCancel: function () {

      this.byId("email").setValue("");
      this.byId("password").setValue("");

      MessageToast.show("Cleared");
    }

  });
});