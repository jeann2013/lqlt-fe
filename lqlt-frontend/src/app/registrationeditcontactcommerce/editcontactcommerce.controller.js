(function() {
    'use strict';

    angular
        .module('app.registrationeditcontactcommerce')
        .controller('EditContactCommerceController', EditContactCommerceController);
        
   /* @ngInject */

    function EditContactCommerceController() {
        var vm = this;
        vm.editcontactcommerceClick = editcontactcommerceClick;
       
        /*vm.user = {
            password: '',
            confirmPassword: '',
            agreeToLicense: false
        };*/

        function editcontactcommerceClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
