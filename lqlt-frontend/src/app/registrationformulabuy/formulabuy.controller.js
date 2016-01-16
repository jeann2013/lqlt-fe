(function() {
    'use strict';

    angular
        .module('app.registrationformulabuy')
        .controller('FormulaBuyController', FormulaBuyController);
        
   /* @ngInject */

    function FormulaBuyController() {
        var vm = this;
        vm.formulabuyClick = formulabuyClick;
       
        vm.pricerange = {  
            'data':[{
                'pounds':'50',
                'price': '$3.50'}, 
                {'pounds':'100',
                'price': '$3.00'}, 
                {'pounds':'150',
                'price': '$2.75'}
            ]};

        function formulabuyClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
