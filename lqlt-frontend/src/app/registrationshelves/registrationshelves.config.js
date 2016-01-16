
(function() {
    'use strict';

    angular
        .module('app.registrationshelves')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationshelves');

        $stateProvider
        /*.state('registrationshelves', {
            abstract: true,
            templateUrl: 'app/registrationshelves/layouts/registrationshelves.tmpl.html'
        })*/
        .state('triangular.admin-default.shelves', {
            url: '/shelves',
            templateUrl: 'app/registrationshelves/shelves.tmpl.html',
            // set the controller to load for this page
            controller: 'EditShelvesController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITSHELVES',
            icon: 'zmdi zmdi-grade',
            priority: 4.2,
            state: 'triangular.admin-default.shelves',
            type: 'link'

        });
    }
})();
