(function() {
    'use strict';

    angular
        .module('app.registrationeditmethods')
        .controller('EditMethodsController', EditMethodsController);
        
   /* @ngInject */

    function EditMethodsController() {
        var vm = this;
        vm.editmethodsClick = editmethodsClick;
       
        vm.user = {
            chkpromotion: false
        };

        function editmethodsClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
