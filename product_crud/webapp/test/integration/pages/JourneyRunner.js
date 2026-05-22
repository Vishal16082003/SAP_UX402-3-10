sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"demo/prod/productcrud/test/integration/pages/ZI_PRODUCT_007List",
	"demo/prod/productcrud/test/integration/pages/ZI_PRODUCT_007ObjectPage"
], function (JourneyRunner, ZI_PRODUCT_007List, ZI_PRODUCT_007ObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('demo/prod/productcrud') + '/test/flp.html#app-preview',
        pages: {
			onTheZI_PRODUCT_007List: ZI_PRODUCT_007List,
			onTheZI_PRODUCT_007ObjectPage: ZI_PRODUCT_007ObjectPage
        },
        async: true
    });

    return runner;
});

