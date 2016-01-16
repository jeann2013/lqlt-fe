
(function() {
    'use strict';

    angular
        .module('app.registrationeditplans')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditplans');

        $stateProvider
        /*.state('registrationeditplans', {
            abstract: true,
            templateUrl: 'app/registrationeditplans/layouts/registrationeditplans.tmpl.html'
        })*/
        .state('triangular.admin-default.editplans', {
            url: '/editplans',
            templateUrl: 'app/registrationeditplans/editplans.tmpl.html',
            // set the controller to load for this page
            controller: 'EditPlansController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITPLANS',
            icon: 'zmdi zmdi-grade',
            priority: 4.0,
            state: 'triangular.admin-default.editplans',
            type: 'link'

        });
    }
})();
