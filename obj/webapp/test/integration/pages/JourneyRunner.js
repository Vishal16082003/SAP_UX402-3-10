sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"demo/obj/obj/test/integration/pages/EmployeesObjectPage"
], function (JourneyRunner, EmployeesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('demo/obj/obj') + '/test/flp.html#app-preview',
        pages: {
			onTheEmployeesObjectPage: EmployeesObjectPage
        },
        async: true
    });

    return runner;
});

