(function() {
    'use strict';

    angular
        .module('app.registrationeditclient')
        .controller('EditClientController', EditClientController);
        
   /* @ngInject */

    function EditClientController() {
        var vm = this;
        vm.editclientClick = editclientClick;
       
        /*vm.user = {
            password: '',
            confirmPassword: '',
            agreeToLicense: false
        };*/

        function editclientClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
