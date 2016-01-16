(function() {
    'use strict';

    angular
        .module('app.registrationeditcontactclient')
        .controller('EditContactClientController', EditContactClientController);
        
   /* @ngInject */

    function EditContactClientController() {
        var vm = this;
        vm.editcontactclientClick = editcontactclientClick;
       
        /*vm.user = {
            password: '',
            confirmPassword: '',
            agreeToLicense: false
        };*/

        function editcontactclientClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
