(function() {
    'use strict';

    angular
        .module('app.registrationeditaccountbank')
        .controller('EditAccounBankController', EditAccounBankController);
        
   /* @ngInject */

    function EditAccounBankController() {
        var vm = this;
        vm.editaccountbankClick = editaccountbankClick;
       
        vm.user = {};

        function editaccountbankClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
