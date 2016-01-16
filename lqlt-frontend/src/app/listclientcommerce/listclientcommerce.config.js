(function() {
    'use strict';

    angular
        .module('app.listclientcommerce')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/listclientcommerce');

        $stateProvider
        /*.state('listclientcommerce', {
            abstract: true,
            templateUrl: 'app/listclientcommerce/layouts/listclientcommerce.tmpl.html'
        })*/
        .state('triangular.admin-default.listclient', {
            url: '/listclient',
            templateUrl: 'app/listclientcommerce/listclient.tmpl.html',
            // set the controller to load for this page
            controller: 'ClientCommerceController',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
            name: 'MENU.CLIENTCOMMERCE',
            icon: 'zmdi zmdi-grade',
            priority: 2.1,
            state: 'triangular.admin-default.listclient',
            type: 'link'
            
        });
    }
})();
