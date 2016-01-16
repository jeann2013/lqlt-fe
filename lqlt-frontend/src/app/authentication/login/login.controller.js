(function() {
    'use strict';

    angular
        .module('app.authentication')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($state, triSettings, $http, $mdToast,$filter) {
        var vm = this;
        vm.loginClick = loginClick;
        vm.socialLogins = [{
            icon: 'fa fa-twitter',
            color: '#5bc0de',
            url: '#'
        },{
            icon: 'fa fa-facebook',
            color: '#337ab7',
            url: '#'
        },{
            icon: 'fa fa-google-plus',
            color: '#e05d6f',
            url: '#'
        },{
            icon: 'fa fa-linkedin',
            color: '#337ab7',
            url: '#'
        }];
        vm.triSettings = triSettings;
        // create blank user variable for login form
        vm.user = {
            //email: '',
            //password: ''
        };

        function loginClick() {
           

        $http({
                method: 'POST',
                url: 'http://lqlt-rest.smartsolutions.com.pa/api/authenticate',
                //url: 'http://localhost/lqlt/laravel/public/api/authenticate',
                data: vm.user
            }).
            success(function(data) {

                    if(data.statusText=="invalid_credentials"){
                    $mdToast.show(
                        $mdToast.simple()
                        .content($filter('translate')('LOGIN.MESSAGES.ACCESS_DENIED'))
                        .position('bottom right')
                        //.action($filter('translate')('LOGIN.MESSAGES.LOGIN_NOW'))
                        .highlightAction(true)
                        .hideDelay(5000)
                    ).then(function() {
                        $state.go('public.auth.login');
                    });
                    }else{
                    
                    $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('LOGIN.MESSAGES.ACCESS_SUCCESS'))
                    .position('bottom right')
                    .hideDelay(5000)
                );
                    }

                }).
            error(function() {
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('LOGIN.MESSAGES.NO_SIGNUP'))
                    .position('bottom right')
                    .hideDelay(5000)
                );
            });

        
    }}
})();

