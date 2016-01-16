
(function() {
    'use strict';

    angular
        .module('app.registrationeditvendors')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditvendors');

        $stateProvider
        /*.state('registrationeditvendors', {
            abstract: true,
            templateUrl: 'app/registrationeditvendors/layouts/registrationeditvendors.tmpl.html'
        })*/
        .state('triangular.admin-default.editvendors', {
            url: '/editvendors',
            templateUrl: 'app/registrationeditvendors/editvendors.tmpl.html',
            // set the controller to load for this page
            controller: 'EditVendorsController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITVENDORS',
            icon: 'zmdi zmdi-grade',
            priority: 5.2,
            state: 'triangular.admin-default.editvendors',
            type: 'link'

        });
    }
})();
