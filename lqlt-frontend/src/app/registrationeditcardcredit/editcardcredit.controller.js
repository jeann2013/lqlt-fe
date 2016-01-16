(function() {
    'use strict';

    angular
        .module('app.registrationeditcardcredit')
        .controller('EditCardCreditController', EditCardCreditController);
        
   /* @ngInject */

    function EditCardCreditController() {
        var vm = this;
        vm.editcardcreditClick = editcardcreditClick;
       
        vm.user = {};

        function editcardcreditClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
