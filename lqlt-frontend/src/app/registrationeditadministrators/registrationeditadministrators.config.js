(function() {
    'use strict';

    angular
        .module('app.registrationeditadministrators')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditadministrators');

        $stateProvider
        /*.state('registrationeditadministrators', {
            abstract: true,
            templateUrl: 'app/registrationeditadministrators/layouts/registrationeditadministrators.tmpl.html'
        })*/
        .state('triangular.admin-default.editadministrators', {
            url: '/editadministrators',
            templateUrl: 'app/registrationeditadministrators/editadministrators.tmpl.html',
            // set the controller to load for this page
            controller: 'EditAdministratorController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITADMINISTRATOR',
            icon: 'zmdi zmdi-grade',
            priority: 3.2,
            state: 'triangular.admin-default.editadministrators',
            type: 'link'

        });
    }
})();
