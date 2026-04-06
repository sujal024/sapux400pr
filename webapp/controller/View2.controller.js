sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller , MessageToast){
    "use strict";
    return Controller.extend("demo.practice.practice.controller.View2" , {
        OnInputChange: function (onEvent) {
            var sValue = onEvent.getParameter("value");
            var bEnable = sValue.trim().length > 0;
            this.byId("submitBtn").setEnabled(bEnable);
        },
        onsubmit: function(){
            MessageToast.show("button clicked");
        }
    })
})