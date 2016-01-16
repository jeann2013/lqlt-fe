
(function() {
    'use strict';

    angular
        .module('app.registrationeditallies')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditallies');

        $stateProvider
        /*.state('registrationeditallies', {
            abstract: true,
            templateUrl: 'app/registrationeditallies/layouts/registrationeditallies.tmpl.html'
        })*/
        .state('triangular.admin-default.editallies', {
            url: '/editallies',
            templateUrl: 'app/registrationeditallies/editallies.tmpl.html',
            // set the controller to load for this page
            controller: 'EditAlliesController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITALLIES',
            icon: 'zmdi zmdi-grade',
            priority: 5.4,
            state: 'triangular.admin-default.editallies',
            type: 'link'

        });
    }
})();
