
(function() {
    'use strict';

    angular
        .module('app.registrationeditaccountbank')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditaccountbank');

        $stateProvider
        /*.state('registrationeditaccountbank', {
            abstract: true,
            templateUrl: 'app/registrationeditaccountbank/layouts/registrationeditaccountbank.tmpl.html'
        })*/
        .state('triangular.admin-default.editaccountbank', {
            url: '/editaccountbank',
            templateUrl: 'app/registrationeditaccountbank/editaccountbank.tmpl.html',
            // set the controller to load for this page
            controller: 'EditAccounBankController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITACCOUNTBANK',
            icon: 'zmdi zmdi-grade',
            priority: 5.0,
            state: 'triangular.admin-default.editaccountbank',
            type: 'link'

        });
    }
})();
