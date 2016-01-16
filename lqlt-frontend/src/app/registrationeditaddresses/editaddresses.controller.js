(function() {
    'use strict';

    angular
        .module('app.registrationeditaddresses')
        .controller('EditAddressController', EditAddressController);
        
   /* @ngInject */

    function EditAddressController() {
        var vm = this;
        vm.editaddressesClick = editaddressesClick;
       


        function editaddressesClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
