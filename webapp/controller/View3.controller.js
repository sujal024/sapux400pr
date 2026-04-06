sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ValueState",
],function(Controller , JSONModel , ValueState){
    "use strict";
     return Controller.extend("demo.practice.practice.controller.View3" , {
        onInit: function(){
            var oModel = new JSONModel({
                inputText : "",
                length : 0
            })
            this.getView().setModel(oModel);
            this.maxLength = 10;
        },
        onLiveChange: function(oEvent){
            var sValue = oEvent.getParameter("value");
            var oInput = this.byId("InputArea");

            this.getView().getModel().setProperty("/length" , sValue.length);

            if(sValue.length > this.maxLength){
                oInput.setValueState(ValueState.Error);
                oInput.setValueStateText("Max"  + this.maxLength + "characters allowed");
            }
            else{
                
                oInput.setValueState(ValueState.Success);
                oInput.setValueStateText("Valid Length");
            }
        }
     })
}
)