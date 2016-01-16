
(function() {
    'use strict';

    angular
        .module('app.registrationeditdepartcommerce')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditdepartcommerce');

        $stateProvider
        /*.state('registrationeditdepartcommerce', {
            abstract: true,
            templateUrl: 'app/registrationeditdepartcommerce/layouts/registrationeditdepartcommerce.tmpl.html'
        })*/
        .state('triangular.admin-default.editdepartcommerce', {
            url: '/editdepartcommerce',
            templateUrl: 'app/registrationeditdepartcommerce/editdepartcommerce.tmpl.html',
            // set the controller to load for this page
            controller: 'EditCommerceController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITDEPARTCOMMERCE',
            icon: 'zmdi zmdi-grade',
            priority: 2.6,
            state: 'triangular.admin-default.editdepartcommerce',
            type: 'link'

        });
    }
})();
