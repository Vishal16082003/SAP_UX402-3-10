/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["demo/mock/mocky/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
