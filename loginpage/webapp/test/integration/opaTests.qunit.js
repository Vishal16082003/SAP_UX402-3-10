/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["demo/login/loginpage/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
