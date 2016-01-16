
(function() {
    'use strict';

    angular
        .module('app.registrationeditoffice')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditoffice');

        $stateProvider
        /*.state('registrationeditoffice', {
            abstract: true,
            templateUrl: 'app/registrationeditoffice/layouts/registrationeditoffice.tmpl.html'
        })*/
        .state('triangular.admin-default.editoffice', {
            url: '/editoffice',
            templateUrl: 'app/registrationeditoffice/editoffice.tmpl.html',
            // set the controller to load for this page
            controller: 'EditOfficeController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITOFFICE',
            icon: 'zmdi zmdi-grade',
            priority: 4.1,
            state: 'triangular.admin-default.editoffice',
            type: 'link'

        });
    }
})();
