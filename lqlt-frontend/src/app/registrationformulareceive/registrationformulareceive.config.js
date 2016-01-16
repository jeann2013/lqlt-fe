(function() {
    'use strict';

    angular
        .module('app.registrationformulareceive')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationformulareceive');

        $stateProvider
        /*.state('registrationformulareceive', {
            abstract: true,
            templateUrl: 'app/registrationformulareceive/layouts/registrationformulareceive.tmpl.html'
        })*/
        .state('triangular.admin-default.formulareceive', {
            url: '/formulareceive',
            templateUrl: 'app/registrationformulareceive/formulareceive.tmpl.html',
            // set the controller to load for this page
            controller: 'FormulaReceiveController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.FORMULARECEIVE',
            icon: 'zmdi zmdi-grade',
            priority: 3.5,
            state: 'triangular.admin-default.formulareceive',
            type: 'link'

        });
    }
})();
