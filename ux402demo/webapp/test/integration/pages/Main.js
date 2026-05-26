sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press",
    "sap/ui/test/matchers/PropertyStrictEquals"
], function (Opa5, Press, PropertyStrictEquals) {
    "use strict";

    Opa5.createPageObjects({

        onTheMainPage: {

            actions: {

                iPressAddButton: function () {
                    return this.waitFor({
                        id: "btnAdd",
                        actions: new Press(),
                        errorMessage: "Button not found"
                    });
                }
            },
            assertions: {

                iShouldSeeAddedValue: function () {
                    return this.waitFor({
                        id: "txtMessage",
                        matchers: new PropertyStrictEquals({
                            name: "text",
                            value: "10"
                        }),
                        success: function () {
                            Opa5.assert.ok(true, "Text updated correctly");
                        },
                        errorMessage: "Text not updated"
                    });
                }
                // ,
                // iShouldSeeThePageMain: function () {
                //     return this.waitFor({
                //         id: "mainApp",   // use your actual view/page id
                //         success: function () {
                //             Opa5.assert.ok(true, "Main page is visible");
                //         },
                //         errorMessage: "Main page not found"
                //     });
                // }

            }
        }
    });
});