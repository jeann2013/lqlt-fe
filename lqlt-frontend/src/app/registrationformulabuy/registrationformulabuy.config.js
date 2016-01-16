(function() {
    'use strict';

    angular
        .module('app.registrationformulabuy')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationformulabuy');

        $stateProvider
        /*.state('registrationformulabuy', {
            abstract: true,
            templateUrl: 'app/registrationformulabuy/layouts/registrationformulabuy.tmpl.html'
        })*/
        .state('triangular.admin-default.formulabuy', {
            url: '/formulabuy',
            templateUrl: 'app/registrationformulabuy/formulabuy.tmpl.html',
            // set the controller to load for this page
            controller: 'FormulaBuyController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.FORMULABUY',
            icon: 'zmdi zmdi-grade',
            priority: 3.4,
            state: 'triangular.admin-default.formulabuy',
            type: 'link'

        });
    }
})();
