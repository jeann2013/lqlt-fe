(function() {
    'use strict';

    angular
        .module('app.detailaccountcustomer')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/detailaccountcustomer');

        $stateProvider
        /*.state('detailaccountcustomer', {
            abstract: true,
            templateUrl: 'app/detailaccountcustomer/layouts/detailaccountcustomer.tmpl.html'
        })*/
        .state('triangular.admin-default.detailcustomer', {
            url: '/detailcustomer',
            templateUrl: 'app/detailaccountcustomer/detailcustomer.tmpl.html',
            // set the controller to load for this page
            controller: 'DetailCustomerController',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
            name: 'MENU.DETAILCUSTOMER.DETAILCUSTOMER',
            icon: 'zmdi zmdi-grade',
            priority: 2.2,
            state: 'triangular.admin-default.detailcustomer',
            type: 'link'
           
           
        });
    }
})();

