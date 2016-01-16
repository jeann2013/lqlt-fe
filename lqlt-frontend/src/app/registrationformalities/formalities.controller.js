(function() {
    'use strict';

    angular
        .module('app.registrationformalities')
        .controller('FormalitiesController', FormalitiesController);
        
   /* @ngInject */

    function FormalitiesController() {
        var vm = this;
        vm.formalitiesClick = formalitiesClick;
       
        /*vm.user = {
            password: '',
            confirmPassword: '',
            agreeToLicense: false
        };*/

        function formalitiesClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
