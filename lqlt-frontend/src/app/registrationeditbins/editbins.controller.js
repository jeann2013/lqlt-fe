(function() {
    'use strict';

    angular
        .module('app.registrationeditbins')
        .controller('EditBinsController', EditBinsController);
        
   /* @ngInject */

    function EditBinsController() {
        var vm = this;
        vm.editbinsClick = editbinsClick;
       
        vm.user = {};

        function editbinsClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
