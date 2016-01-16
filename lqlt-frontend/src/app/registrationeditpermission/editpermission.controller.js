(function() {
    'use strict';

    angular
        .module('app.registrationeditpermission')
        .controller('EditPermissionController', EditPermissionController);
        
   /* @ngInject */

    function EditPermissionController() {
        var vm = this;
        vm.editpermissionClick = editpermissionClick;
       
        /*vm.user = {
            password: '',
            confirmPassword: '',
            agreeToLicense: false
        };*/

        function editpermissionClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
