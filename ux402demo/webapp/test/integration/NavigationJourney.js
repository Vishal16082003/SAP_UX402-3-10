sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/View1"
], function (opaTest) {
    "use strict";

    QUnit.module("Navigation Journey");

    opaTest("Should display App view", function (Given, When, Then) {

        Given.iStartMyApp();

        Then.onTheMainPage.iShouldSeeThePageView();

        Then.iTeardownMyApp();
    });
});