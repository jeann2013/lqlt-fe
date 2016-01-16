(function() {
    'use strict';

    angular
        .module('app.registrationeditsitelocked')
        .controller('EditSiteLockedController', EditSiteLockedController);
        
   /* @ngInject */

    function EditSiteLockedController() {
        var vm = this;
        vm.editsitelockedClick = editsitelockedClick;
       
        /*vm.user = {
            password: '',
            confirmPassword: '',
            agreeToLicense: false
        };*/

        function editsitelockedClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
