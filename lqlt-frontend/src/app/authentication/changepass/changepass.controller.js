(function() {
    'use strict';

    angular
        .module('app.authentication')
        .controller('ChangePassController', ChangePassController);

    /* @ngInject */
    function ChangePassController($state, triSettings) {
        var vm = this;
        vm.changepassClick = changepassClick;
        vm.triSettings = triSettings;
        vm.user = {
            password: '',
            confirmPassword: '',
            agreeToLicense: false
        };
        function changepassClick() {
            $state.go('triangular.admin-default.introduction');
        }
    }
})();
