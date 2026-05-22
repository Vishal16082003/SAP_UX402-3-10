sap.ui.define([
    "demo/mock/mocky/localService/mockserver"
], function (mockserver) {
    "use strict";

    mockserver.init();

    sap.ui.require(["sap/ui/core/ComponentSupport"]);
});