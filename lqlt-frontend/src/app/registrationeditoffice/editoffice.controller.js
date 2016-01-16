(function() {
    'use strict';

    angular
        .module('app.registrationeditoffice')
        .controller('EditOfficeController', EditOfficeController);
        
   /* @ngInject */

    function EditOfficeController() {
        var vm = this;
        vm.editofficeClick = editofficeClick;
       
     

        function editofficeClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
