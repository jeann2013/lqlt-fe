
(function() {
    'use strict';

    angular
        .module('app.registrationeditsitelocked')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditsitelocked');

        $stateProvider
        /*.state('registrationeditsitelocked', {
            abstract: true,
            templateUrl: 'app/registrationeditsitelocked/layouts/registrationeditsitelocked.tmpl.html'
        })*/
        .state('triangular.admin-default.editsitelocked', {
            url: '/editsitelocked',
            templateUrl: 'app/registrationeditsitelocked/editsitelocked.tmpl.html',
            // set the controller to load for this page
            controller: 'EditSiteLockedController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITSITELOCKED',
            icon: 'zmdi zmdi-grade',
            priority: 4.5,
            state: 'triangular.admin-default.editsitelocked',
            type: 'link'

        });
    }
})();
