(function() {
    'use strict';

    angular
        .module('app.registrationeditcontactcommerce')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditcontactcommerce');

        $stateProvider
        /*.state('registrationeditcontactcommerce', {
            abstract: true,
            templateUrl: 'app/registrationeditcontactcommerce/layouts/registrationeditcontactcommerce.tmpl.html'
        })*/
        .state('triangular.admin-default.editcontactcommerce', {
            url: '/editcontactcommerce',
            templateUrl: 'app/registrationeditcontactcommerce/editcontactcommerce.tmpl.html',
            // set the controller to load for this page
            controller: 'EditContactCommerceController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITCONTACTCOMMERCE',
            icon: 'zmdi zmdi-grade',
            priority: 2.8,
            state: 'triangular.admin-default.editcontactcommerce',
            type: 'link'

        });
    }
})();
