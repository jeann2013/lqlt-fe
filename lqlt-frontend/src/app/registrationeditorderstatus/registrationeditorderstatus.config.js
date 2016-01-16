
(function() {
    'use strict';

    angular
        .module('app.registrationeditorderstatus')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditorderstatus');

        $stateProvider
        /*.state('registrationeditorderstatus', {
            abstract: true,
            templateUrl: 'app/registrationeditorderstatus/layouts/registrationeditorderstatus.tmpl.html'
        })*/
        .state('triangular.admin-default.editorderstatus', {
            url: '/editorderstatus',
            templateUrl: 'app/registrationeditorderstatus/editorderstatus.tmpl.html',
            // set the controller to load for this page
            controller: 'EditVendorsController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITORDERSTATUS',
            icon: 'zmdi zmdi-grade',
            priority: 5.3,
            state: 'triangular.admin-default.editorderstatus',
            type: 'link'

        });
    }
})();
