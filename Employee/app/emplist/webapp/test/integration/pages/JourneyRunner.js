sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"demo/list/emplist/test/integration/pages/EmployeeDetailsList",
	"demo/list/emplist/test/integration/pages/EmployeeDetailsObjectPage"
], function (JourneyRunner, EmployeeDetailsList, EmployeeDetailsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('demo/list/emplist') + '/test/flp.html#app-preview',
        pages: {
			onTheEmployeeDetailsList: EmployeeDetailsList,
			onTheEmployeeDetailsObjectPage: EmployeeDetailsObjectPage
        },
        async: true
    });

    return runner;
});

