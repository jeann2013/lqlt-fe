(function() {
    'use strict';

    angular
        .module('app.settings')
        .controller('SettingsController', SettingsController);
        
   /* @ngInject */

    function SettingsController() {
        var vm = this;
        vm.settingClick = settingClick;
       
        /*vm.user = {
            password: '',
            confirmPassword: '',
            agreeToLicense: false
        };*/

        function settingClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
