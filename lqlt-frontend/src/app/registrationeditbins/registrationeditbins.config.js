
(function() {
    'use strict';

    angular
        .module('app.registrationeditbins')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditbins');

        $stateProvider
        /*.state('registrationeditbins', {
            abstract: true,
            templateUrl: 'app/registrationeditbins/layouts/registrationeditbins.tmpl.html'
        })*/
        .state('triangular.admin-default.editbins', {
            url: '/editbins',
            templateUrl: 'app/registrationeditbins/editbins.tmpl.html',
            // set the controller to load for this page
            controller: 'EditBinsController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITBINS',
            icon: 'zmdi zmdi-grade',
            priority: 5.5,
            state: 'triangular.admin-default.editbins',
            type: 'link'

        });
    }
})();
