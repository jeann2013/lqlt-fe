(function() {
    'use strict';

    angular
        .module('app.registrationeditcommerce')
        .controller('EditCommerceController', EditCommerceController);
        
   /* @ngInject */

    function EditCommerceController() {
        var vm = this;
        vm.editcommerceClick = editcommerceClick;
       
        /*vm.user = {
            password: '',
            confirmPassword: '',
            agreeToLicense: false
        };*/

        function editcommerceClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
