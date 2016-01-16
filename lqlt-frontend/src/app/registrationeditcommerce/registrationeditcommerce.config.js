(function() {
    'use strict';

    angular
        .module('app.registrationeditcommerce')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditcommerce');

        $stateProvider
        /*.state('registrationeditcommerce', {
            abstract: true,
            templateUrl: 'app/registrationeditcommerce/layouts/registrationeditcommerce.tmpl.html'
        })*/
        .state('triangular.admin-default.editcommerce', {
            url: '/editcommerce',
            templateUrl: 'app/registrationeditcommerce/editcommerce.tmpl.html',
            // set the controller to load for this page
            controller: 'EditCommerceController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITCOMMERCE',
            icon: 'zmdi zmdi-grade',
            priority: 2.5,
            state: 'triangular.admin-default.editcommerce',
            type: 'link'

        });
    }
})();
