
(function() {
    'use strict';

    angular
        .module('app.registrationeditaddresses')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditaddresses');

        $stateProvider
        /*.state('registrationeditaddresses', {
            abstract: true,
            templateUrl: 'app/registrationeditaddresses/layouts/registrationeditaddresses.tmpl.html'
        })*/
        .state('triangular.admin-default.editaddresses', {
            url: '/editaddresses',
            templateUrl: 'app/registrationeditaddresses/editaddresses.tmpl.html',
            // set the controller to load for this page
            controller: 'EditAddressController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITADDRESS',
            icon: 'zmdi zmdi-grade',
            priority: 4.7,
            state: 'triangular.admin-default.editaddresses',
            type: 'link'

        });
    }
})();
