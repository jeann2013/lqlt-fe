(function() {
    'use strict';

    angular
        .module('app.registrationeditcontactclient')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditcontactclient');

        $stateProvider
        /*.state('registrationeditcontactclient', {
            abstract: true,
            templateUrl: 'app/registrationeditcontactclient/layouts/registrationeditcontactclient.tmpl.html'
        })*/
        .state('triangular.admin-default.editcontactclient', {
            url: '/editcontactclient',
            templateUrl: 'app/registrationeditcontactclient/editcontactclient.tmpl.html',
            // set the controller to load for this page
            controller: 'EditContactClientController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITCONTACTCLIENT',
            icon: 'zmdi zmdi-grade',
            priority: 2.4,
            state: 'triangular.admin-default.editcontactclient',
            type: 'link'

        });
    }
})();
