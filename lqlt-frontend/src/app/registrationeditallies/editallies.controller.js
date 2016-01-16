(function() {
    'use strict';

    angular
        .module('app.registrationeditallies')
        .controller('EditAlliesController', EditAlliesController);
        
   /* @ngInject */

    function EditAlliesController() {
        var vm = this;
        vm.editalliesClick = editalliesClick;
       
        vm.user = {};

        function editalliesClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
