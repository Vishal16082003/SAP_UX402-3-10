sap.ui.define([
    "demo/controller/Main.controller"
], function (MainController) {
    "use strict";

    QUnit.module("Main Controller Test", {

        beforeEach: function () {
            this.oController = new MainController();

            this.oTextStub = {
                setText: sinon.spy()
            };

            sinon.stub(this.oController, "byId")
                .returns(this.oTextStub);
        },

        afterEach: function () {
            this.oController.byId.restore();
        }
    });
    QUnit.test("Test Add Function", function (assert) {

        this.oController.onAdd();

        assert.ok(
            this.oTextStub.setText.calledWith("10"),
            "Add function working"
        );
    });

    QUnit.test("Test Subtract Function", function (assert) {

        this.oController.value = 10;
        this.oController.onSubtract();

        assert.ok(
            this.oTextStub.setText.calledWith("5"),
            "Subtract function working"
        );
    });
 QUnit.test("Test Multiply Function", function (assert) {

        this.oController.value = 10;
        this.oController.onMultiply();

        assert.ok(
            this.oTextStub.setText.calledWith("20"),
            "Multiply function working"
        );
    });

    QUnit.test("Test Reset Function", function (assert) {

        this.oController.value = 5;
        this.oController.onReset();

        assert.ok(
            this.oTextStub.setText.calledWith("0"),
            "Reset function working"
        );
    });
});