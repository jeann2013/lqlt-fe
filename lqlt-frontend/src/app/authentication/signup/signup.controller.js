(function() {
    'use strict';

    angular
        .module('app.authentication')
        .controller('SignupController', SignupController);

    /* @ngInject */
    function SignupController($scope, $state, $mdToast, $http, $filter, triSettings, API_CONFIG, $log) {
        var vm = this;
        vm.triSettings = triSettings;
        vm.signupClick = signupClick;


        function signupClick() {
            $log.log(vm.user);
          
            $http({
                method: 'POST',
                url: 'http://lqlt-rest.smartsolutions.com.pa/cuenta',
                //url: 'http://localhost/lqlt/laravel/public/cuenta',
                data: vm.user
            }).
            success(function(data) {

                    if(data.email!="Existe"){
                    $mdToast.show(
                        $mdToast.simple()
                        .content($filter('translate')('SIGNUP.MESSAGES.CONFIRM_SENT') + ' ' + data.email)
                        .position('bottom right')
                        .action($filter('translate')('SIGNUP.MESSAGES.LOGIN_NOW'))
                        .highlightAction(true)
                        .hideDelay(5000)
                    ).then(function() {
                        $state.go('public.auth.login');
                    });
                    }else{
                       $mdToast.show(
                        $mdToast.simple()
                        .content($filter('translate')('SIGNUP.MESSAGES.EMAIL_EXIST'))
                        .position('bottom right')
                        //.action($filter('translate')('SIGNUP.MESSAGES.LOGIN_NOW'))
                        .highlightAction(true)
                        .hideDelay(0)
                    ).then(function() {
                        $state.go('public.auth.login');
                    }); 
                    }

                }).
            error(function() {
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('SIGNUP.MESSAGES.NO_SIGNUP'))
                    .position('bottom right')
                    .hideDelay(5000)
                );
            });
        }
    }
})();
