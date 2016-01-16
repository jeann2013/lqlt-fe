(function() {
    'use strict';

    angular
        .module('app.registrationformulareceive')
        .controller('FormulaReceiveController', FormulaReceiveController);
        
   /* @ngInject */

    function FormulaReceiveController() {
        var vm = this;
        vm.formulareceiveClick = formulareceiveClick;
       
        vm.pricerange = {  
            'data':[{
                'pounds':'50',
                'price': '$3.50'}, 
                {'pounds':'100',
                'price': '$3.00'}, 
                {'pounds':'150',
                'price': '$2.75'}
            ]};
            
        function formulareceiveClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
