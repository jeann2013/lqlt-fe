
(function() {
    'use strict';

    angular
        .module('app.registrationeditlockers')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditlockers');

        $stateProvider
        /*.state('registrationeditlockers', {
            abstract: true,
            templateUrl: 'app/registrationeditlockers/layouts/registrationeditlockers.tmpl.html'
        })*/
        .state('triangular.admin-default.editlockers', {
            url: '/editlockers',
            templateUrl: 'app/registrationeditlockers/editlockers.tmpl.html',
            // set the controller to load for this page
            controller: 'EditLockersController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITLOCKERS',
            icon: 'zmdi zmdi-grade',
            priority: 4.3,
            state: 'triangular.admin-default.editlockers',
            type: 'link'

        });
    }
})();
