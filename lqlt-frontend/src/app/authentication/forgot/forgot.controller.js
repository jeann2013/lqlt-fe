(function() {
    'use strict';

    angular
        .module('app.authentication')
        .controller('ForgotController', ForgotController);

    /* @ngInject */
    function ForgotController($scope, $state, $mdToast, $filter, $http, triSettings, API_CONFIG,$log) {
        var vm = this;
        vm.triSettings = triSettings;
        // vm.user = {
        //     email: '',
        //     captcha: '',
        //     confirmCaptcha: ''
        // };
        vm.resetClick = resetClick;
        
 
        
        ////////////////

        function resetClick() {
            $log.log(vm.user);
            
            $http({
                 method: 'POST',
                url: 'http://lqlt-rest.smartsolutions.com.pa/cuentaforgot',
                //url: 'http://localhost/lqlt/laravel/public/cuentaforgot',
                data: vm.user
            }).
            success(function(data) {

                if(data.email=="No Existe"){

                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('FORGOT.MESSAGES.NO_RESET'))
                    .position('bottom right')
                    .action($filter('translate')('FORGOT.MESSAGES.LOGIN_NOW'))
                    .highlightAction(true)
                    .hideDelay(2000)
                ).then(function() {
                    $state.go('public.auth.login');
                });
                }else{

                    $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('FORGOT.MESSAGES.RESET_SENT') + ' ' + data.email)
                    .position('bottom right')
                    .action($filter('translate')('FORGOT.MESSAGES.LOGIN_NOW'))
                    .highlightAction(true)
                    .hideDelay(2000)
                ).then(function() {
                    $state.go('public.auth.login');
                });



                }
            }).
            error(function(data) {
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('FORGOT.MESSAGES.NO_RESET'))
                    .position('bottom right')
                    .hideDelay(5000)
                );
            });
        }
    }
})();
