(function() {
    'use strict';

    angular
        .module('app.registrationformulaloadbuy')
        .controller('FormulaLoadBuyController', FormulaLoadBuyController);
        
   /* @ngInject */

    function FormulaLoadBuyController() {
        var vm = this;
        vm.formulaloadbuyClick = formulaloadbuyClick;
       
        vm.pricerange = {  
            'data':[{
                'pounds':'50',
                'price': '$3.50'}, 
                {'pounds':'100',
                'price': '$3.00'}, 
                {'pounds':'150',
                'price': '$2.75'}
            ]};

        function formulaloadbuyClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
