(function() {
    'use strict';

    angular
        .module('app.registrationeditadministrators')
        .controller('EditAdministratorController', EditAdministratorController);
        
   /* @ngInject */

    function EditAdministratorController() {
        var vm = this;
        vm.editadministratorsClick = editadministratorsClick;
       
        /*vm.user = {
            password: '',
            confirmPassword: '',
            agreeToLicense: false
        };*/

        function editadministratorsClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
