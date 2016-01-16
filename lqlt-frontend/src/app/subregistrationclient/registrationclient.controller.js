(function() {
    'use strict';

    angular
        .module('app.subregistrationclient')
        .controller('ClientController', ClientController);

    /* @ngInject */
    function ClientController($scope, $state, $mdToast, $filter, $http, triSettings,$log) {
        var vm = this;
        //vm.triSettings = triSettings;
        vm.clientClick = clientClick;
        vm.commerceClick = commerceClick;
        // vm.cip = '';
        // vm.checkDigitC= '';
        // vm.identype= '';
        // vm.preofficeC= '';
        // vm.ruc = '';
        // vm.businessname= '';
        // vm.tradename= '';
        // vm.checkDigit= '';
        // vm.preoffice= '';
        ////////////////
        function clientClick() {
            //$state.go('triangular.admin-default.introduction');

             $log.log(vm.user);
              
                $http({
                    method: 'POST',
                    url: 'http://lqlt-rest.smartsolutions.com.pa/cuentapersonal',
                    //url: 'http://localhost/lqlt/laravel/public/cuentapersonal',
                    data: vm.user
                }).
                success(function(data) {

                        if(data.ced!="Existe"){
                        $mdToast.show(
                            $mdToast.simple()
                            .content($filter('translate')('CLIENT.MESSAGES.CONFIRM_SAVE'))
                            .position('bottom right')
                            //.action($filter('translate')('CLIENT.MESSAGES.LOGIN_NOW'))
                            .highlightAction(true)
                            .hideDelay(2000)
                        ).then(function() {
                            $state.go('public.auth.login');
                        });
                        }else{
                           $mdToast.show(
                            $mdToast.simple()
                            .content($filter('translate')('CLIENT.MESSAGES.CED_EXIST'))
                            .position('bottom right')
                            //.action($filter('translate')('CLIENT.MESSAGES.LOGIN_NOW'))
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
                        .content($filter('translate')('CLIENT.MESSAGES.NO_CONFIR'))
                        .position('bottom right')
                        .hideDelay(5000)
                    );
                });


        }
        function commerceClick() {
            //$state.go('triangular.admin-default.introduction');

                $log.log(vm.user);
              
                $http({
                    method: 'POST',
                    url: 'http://lqlt-rest.smartsolutions.com.pa/cuentacomercial',
                    //url: 'http://localhost/lqlt/laravel/public/cuentacomercial',
                    data: vm.user
                }).
                success(function(data) {

                        if(data.ruc!="Existe"){
                        $mdToast.show(
                            $mdToast.simple()
                            .content($filter('translate')('COMMERCE.MESSAGES.CONFIRM_SAVE'))
                            .position('bottom right')
                            //.action($filter('translate')('COMMERCE.MESSAGES.LOGIN_NOW'))
                            .highlightAction(true)
                            .hideDelay(2000)
                        ).then(function() {
                            //$state.go('public.auth.login');
                        });
                        }else{
                           $mdToast.show(
                            $mdToast.simple()
                            .content($filter('translate')('COMMERCE.MESSAGES.RUC_EXIST'))
                            .position('bottom right')
                            //.action($filter('translate')('SIGNUP.MESSAGES.LOGIN_NOW'))
                            .highlightAction(true)
                            .hideDelay(0)
                        ).then(function() {
                            //$state.go('public.auth.login');
                        }); 
                        }

                    }).
                error(function() {
                    $mdToast.show(
                        $mdToast.simple()
                        .content($filter('translate')('COMMERCE.MESSAGES.NO_CONFIR'))
                        .position('bottom right')
                        .hideDelay(5000)
                    );
                });


        }


       

       




    }
})();