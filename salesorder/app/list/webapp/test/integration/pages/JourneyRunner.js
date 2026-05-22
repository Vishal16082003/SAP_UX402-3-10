sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"demo/list/list/test/integration/pages/SalesOrdersList",
	"demo/list/list/test/integration/pages/SalesOrdersObjectPage"
], function (JourneyRunner, SalesOrdersList, SalesOrdersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('demo/list/list') + '/test/flp.html#app-preview',
        pages: {
			onTheSalesOrdersList: SalesOrdersList,
			onTheSalesOrdersObjectPage: SalesOrdersObjectPage
        },
        async: true
    });

    return runner;
});

