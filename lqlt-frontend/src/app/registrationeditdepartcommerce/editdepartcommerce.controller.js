(function() {
    'use strict';

    angular
        .module('app.registrationeditdepartcommerce')
        .controller('EditDepartCommerceController', EditDepartCommerceController);
        
   /* @ngInject */

    function EditDepartCommerceController() {
        var vm = this;
        vm.editdepartcommerceClick = editdepartcommerceClick;
       
        /*vm.user = {
            password: '',
            confirmPassword: '',
            agreeToLicense: false
        };*/

        function editdepartcommerceClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
