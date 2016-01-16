(function() {
    'use strict';

    angular
        .module('app.subregistrationclient')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/subregistrationclient');

        $stateProvider
        .state('subregistrationclient', {
            abstract: true,
            templateUrl: 'app/subregistrationclient/layouts/subregistrationclient.tmpl.html'
        })
        .state('subregistrationclient.registrationclient', {
            url: '/subregistrationclient',
            templateUrl: 'app/subregistrationclient/registrationclient.tmpl.html',
            // set the controller to load for this page
            controller: 'ClientController',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
            name: 'MENU.SUBREGIST',
            icon: 'zmdi zmdi-grade',
            priority: 1.3,
            state: 'subregistrationclient.registrationclient',
            type: 'link'
            
        });
    }
})();
