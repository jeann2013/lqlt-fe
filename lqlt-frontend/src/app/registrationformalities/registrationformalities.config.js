
(function() {
    'use strict';

    angular
        .module('app.registrationformalities')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationformalities');

        $stateProvider
        /*.state('registrationformalities', {
            abstract: true,
            templateUrl: 'app/registrationformalities/layouts/registrationformalities.tmpl.html'
        })*/
        .state('triangular.admin-default.formalities', {
            url: '/formalities',
            templateUrl: 'app/registrationformalities/formalities.tmpl.html',
            // set the controller to load for this page
            controller: 'FormalitiesController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITFORMALITIES',
            icon: 'zmdi zmdi-grade',
            priority: 4.4,
            state: 'triangular.admin-default.formalities',
            type: 'link'

        });
    }
})();
