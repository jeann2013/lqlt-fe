(function() {
    'use strict';

    angular
        .module('app.registrationformuladelivery')
        .controller('FormulaDeliveryController', FormulaDeliveryController);
        
   /* @ngInject */

    function FormulaDeliveryController() {
        var vm = this;
        vm.formuladeliveryClick = formuladeliveryClick;
       
        vm.pricerange = {  
            'data':[{
                'pounds':'50',
                'price': '$3.50'}, 
                {'pounds':'100',
                'price': '$3.00'}, 
                {'pounds':'150',
                'price': '$2.75'}
            ]};

        function formuladeliveryClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
