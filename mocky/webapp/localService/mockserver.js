sap.ui.define([
    "sap/ui/core/util/MockServer"
], function (MockServer) {
    "use strict";

    return {

        init: function () {

            // Create Mock Server
            var oMockServer = new MockServer({
                rootUri: "/mockserver/"
            });

            // Mock Server Configuration
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: 500
            });

            // Simulate OData Service
            oMockServer.simulate(
                sap.ui.require.toUrl(
                    "demo/mock/mocky/localService/metadata.xml"
                ),
                {
                    sMockdataBaseUrl: sap.ui.require.toUrl(
                        "demo/mock/mocky/localService/mockdata"
                    ),

                    bGenerateMissingMockData: true
                }
            );

            // Start Mock Server
            oMockServer.start();

            console.log("Mock Server Started");
        }
    };
});