({
    doInitHelper : function(component, event, helper) {
        let carouselName = component.get("v.dimension");
        console.log('carouselName--'+carouselName);
        var action = component.get("c.getCarouselTile");
            action.setParams({  
                 "carouselName" : carouselName
            });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log('Result--'+response.getReturnValue());
                component.set('v.showLoadingSpinner', false);
                component.set('v.carousel_Tiles', response.getReturnValue());
               
            }
                else if (state === "ERROR") {
                    component.set('v.showLoadingSpinner', false);
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + 
                                        errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
        });
        $A.enqueueAction(action); 
    },
    clickHandlerHelper : function(component, event, helper) {
        var targetUrl = event.currentTarget.dataset.id;
        console.log('targetUrl--'+targetUrl);
        if( targetUrl ){
            window.open(targetUrl,'_self');
        }
    }
})