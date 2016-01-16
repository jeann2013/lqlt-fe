(function() {
    'use strict';

    angular
        .module('app.registrationformulaloadbuy')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationformulaloadbuy');

        $stateProvider
        /*.state('registrationformulaloadbuy', {
            abstract: true,
            templateUrl: 'app/registrationformulaloadbuy/layouts/registrationformulaloadbuy.tmpl.html'
        })*/
        .state('triangular.admin-default.formulaloadbuy', {
            url: '/formulaloadbuy',
            templateUrl: 'app/registrationformulaloadbuy/formulaloadbuy.tmpl.html',
            // set the controller to load for this page
            controller: 'FormulaLoadBuyController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.FORMULALOADBUY',
            icon: 'zmdi zmdi-grade',
            priority: 3.6,
            state: 'triangular.admin-default.formulaloadbuy',
            type: 'link'

        });
    }
})();
