(function() {
    'use strict';

    angular
        .module('app.registrationeditorderstatus')
        .controller('EditVendorsController', EditVendorsController);
        
   /* @ngInject */

    function EditVendorsController() {
        var vm = this;
        vm.editorderstatusClick = editorderstatusClick;
       
        vm.user = {};

        function editorderstatusClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
