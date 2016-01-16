(function() {
    'use strict';

    angular
        .module('app.registrationeditvendors')
        .controller('EditVendorsController', EditVendorsController);
        
   /* @ngInject */

    function EditVendorsController() {
        var vm = this;
        vm.editvendorsClick = editvendorsClick;
       
        vm.user = {};

        function editvendorsClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
