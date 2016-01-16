(function() {
    'use strict';

    angular
        .module('app.registrationformulaloadreceive')
        .controller('FormulaLoadReceiveController', FormulaLoadReceiveController);
        
   /* @ngInject */

    function FormulaLoadReceiveController() {
        var vm = this;
        vm.formulaloadreceiveClick = formulaloadreceiveClick;
       
        vm.pricerange = {  
            'data':[{
                'pounds':'50',
                'price': '$3.50'}, 
                {'pounds':'100',
                'price': '$3.00'}, 
                {'pounds':'150',
                'price': '$2.75'}
            ]};
            
        function formulaloadreceiveClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
