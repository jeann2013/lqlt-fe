(function() {
    'use strict';

    angular
        .module('app.settingspecialclient')
        .controller('SettingClientController', SettingClientController);
        
   /* @ngInject */

    function SettingClientController() {
        var vm = this;
        vm.settingclientClick = settingclientClick;
       
        /*vm.user = {
            password: '',
            confirmPassword: '',
            agreeToLicense: false
        };*/

        function settingclientClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
