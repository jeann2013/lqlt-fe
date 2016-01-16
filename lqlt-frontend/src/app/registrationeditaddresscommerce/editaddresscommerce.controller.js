(function() {
    'use strict';

    angular
        .module('app.registrationeditaddresscommerce')
        .controller('EditAddressCommerceController', EditAddressCommerceController);
        
   /* @ngInject */

    function EditAddressCommerceController() {
        var vm = this;
        vm.editaddresscommerceClick = editaddresscommerceClick;
       
        /*vm.user = {
            password: '',
            confirmPassword: '',
            agreeToLicense: false
        };*/

        function editaddresscommerceClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
