(function() {
    'use strict';

    angular
        .module('app.registrationformulaloadreceive')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationformulaloadreceive');

        $stateProvider
        /*.state('registrationformulaloadreceive', {
            abstract: true,
            templateUrl: 'app/registrationformulaloadreceive/layouts/registrationformulaloadreceive.tmpl.html'
        })*/
        .state('triangular.admin-default.formulaloadreceive', {
            url: '/formulaloadreceive',
            templateUrl: 'app/registrationformulaloadreceive/formulaloadreceive.tmpl.html',
            // set the controller to load for this page
            controller: 'FormulaLoadReceiveController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.FORMULALOADRECEIVE',
            icon: 'zmdi zmdi-grade',
            priority: 3.7,
            state: 'triangular.admin-default.formulaloadreceive',
            type: 'link'

        });
    }
})();
