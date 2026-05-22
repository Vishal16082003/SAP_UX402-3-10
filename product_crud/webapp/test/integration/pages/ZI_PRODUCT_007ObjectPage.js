sap.ui.define(['sap/fe/test/ObjectPage', 'sap/ui/test/actions/Press'], function(ObjectPage, Press) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {
            iPressSectionIconTabFilterButton: function (section) {
                return this.waitFor({
                    id: new RegExp(`.*--fe::FacetSection::${section}-anchor$`),
                    actions: new Press()
                });
            }
        },
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'demo.prod.productcrud',
            componentId: 'ZI_PRODUCT_007ObjectPage',
            contextPath: '/ZI_PRODUCT_007'
        },
        CustomPageDefinitions
    );
});