(function() {
    'use strict';

    angular
        .module('app.registrationeditclient')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditclient');

        $stateProvider
        /*.state('registrationeditclient', {
            abstract: true,
            templateUrl: 'app/registrationeditclient/layouts/registrationeditclient.tmpl.html'
        })*/
        .state('triangular.admin-default.editclient', {
            url: '/editclient',
            templateUrl: 'app/registrationeditclient/editclient.tmpl.html',
            // set the controller to load for this page
            controller: 'EditClientController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITCLIENT',
            icon: 'zmdi zmdi-grade',
            priority: 2.3,
            state: 'triangular.admin-default.editclient',
            type: 'link'

        });
    }
})();
