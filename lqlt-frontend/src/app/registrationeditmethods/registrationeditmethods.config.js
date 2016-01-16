
(function() {
    'use strict';

    angular
        .module('app.registrationeditmethods')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditmethods');

        $stateProvider
        /*.state('registrationeditmethods', {
            abstract: true,
            templateUrl: 'app/registrationeditmethods/layouts/registrationeditmethods.tmpl.html'
        })*/
        .state('triangular.admin-default.editmethods', {
            url: '/editmethods',
            templateUrl: 'app/registrationeditmethods/editmethods.tmpl.html',
            // set the controller to load for this page
            controller: 'EditMethodsController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITMETHODS',
            icon: 'zmdi zmdi-grade',
            priority: 4.9,
            state: 'triangular.admin-default.editmethods',
            type: 'link'

        });
    }
})();
