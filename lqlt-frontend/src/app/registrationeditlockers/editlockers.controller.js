(function() {
    'use strict';

    angular
        .module('app.registrationeditlockers')
        .controller('EditLockersController', EditLockersController);
        
   /* @ngInject */

    function EditLockersController() {
        var vm = this;
        vm.editlockerslick = editlockerslick;
       
     

        function editlockerslick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
