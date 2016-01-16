(function() {
    'use strict';

    angular
        .module('app.registrationeditplans')
        .controller('EditPlansController', EditPlansController);
        
   /* @ngInject */

    function EditPlansController() {
        var vm = this;
        vm.editplansClick = editplansClick;
       
     

        function editplansClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
