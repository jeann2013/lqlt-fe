(function() {
    'use strict';

    angular
        .module('app.registrationeditaddresscommerce')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditaddresscommerce');

        $stateProvider
        /*.state('registrationeditaddresscommerce', {
            abstract: true,
            templateUrl: 'app/registrationeditaddresscommerce/layouts/registrationeditaddresscommerce.tmpl.html'
        })*/
        .state('triangular.admin-default.editaddresscommerce', {
            url: '/editaddresscommerce',
            templateUrl: 'app/registrationeditaddresscommerce/editaddresscommerce.tmpl.html',
            // set the controller to load for this page
            controller: 'EditAddressCommerceController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITADDRESSCOMMERCE',
            icon: 'zmdi zmdi-grade',
            priority: 2.7,
            state: 'triangular.admin-default.editaddresscommerce',
            type: 'link'

        });
    }
})();
