sap.ui.define([
    "sap/ui/test/Opa5"
], function (Opa5) {
    "use strict";

    Opa5.createPageObjects({

        onTheMainPage: {

            assertions: {

                iShouldSeeThePageView: function () {

                    return this.waitFor({

                        viewName: "App",

                        success: function () {
                            Opa5.assert.ok(true, "Main App displayed");
                        },

                        errorMessage: "Main App not displayed"
                    });
                }
            }
        }
    });
});