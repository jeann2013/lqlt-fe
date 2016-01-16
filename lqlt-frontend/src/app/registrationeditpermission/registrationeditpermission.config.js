(function() {
    'use strict';

    angular
        .module('app.registrationeditpermission')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditpermission');

        $stateProvider
        /*.state('registrationeditpermission', {
            abstract: true,
            templateUrl: 'app/registrationeditpermission/layouts/registrationeditpermission.tmpl.html'
        })*/
        .state('triangular.admin-default.editpermission', {
            url: '/editpermission',
            templateUrl: 'app/registrationeditpermission/editpermission.tmpl.html',
            // set the controller to load for this page
            controller: 'EditPermissionController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITPERMISSION',
            icon: 'zmdi zmdi-grade',
            priority: 3.3,
            state: 'triangular.admin-default.editpermission',
            type: 'link'

        });
    }
})();
