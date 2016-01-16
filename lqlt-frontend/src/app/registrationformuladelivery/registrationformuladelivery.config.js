(function() {
    'use strict';

    angular
        .module('app.registrationformuladelivery')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationformuladelivery');

        $stateProvider
        /*.state('registrationformuladelivery', {
            abstract: true,
            templateUrl: 'app/registrationformuladelivery/layouts/registrationformuladelivery.tmpl.html'
        })*/
        .state('triangular.admin-default.formuladelivery', {
            url: '/formuladelivery',
            templateUrl: 'app/registrationformuladelivery/formuladelivery.tmpl.html',
            // set the controller to load for this page
            controller: 'FormulaDeliveryController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.FORMULADELIVERY',
            icon: 'zmdi zmdi-grade',
            priority: 3.8,
            state: 'triangular.admin-default.formuladelivery',
            type: 'link'

        });
    }
})();
