({
    doInit : function(component, event, helper) {
        component.set('v.showLoadingSpinner', false);
        helper.doInitHelper(component, event, helper);
    },
    clickHandler : function(component, event, helper) {
        component.set('v.showLoadingSpinner', false);
        helper.clickHandlerHelper(component, event, helper);
    }
})