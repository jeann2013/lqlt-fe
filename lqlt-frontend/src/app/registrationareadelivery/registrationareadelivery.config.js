
(function() {
    'use strict';

    angular
        .module('app.registrationareadelivery')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationareadelivery');

        $stateProvider
        /*.state('registrationareadelivery', {
            abstract: true,
            templateUrl: 'app/registrationareadelivery/layouts/registrationareadelivery.tmpl.html'
        })*/
        .state('triangular.admin-default.areadelivery', {
            url: '/areadelivery',
            templateUrl: 'app/registrationareadelivery/areadelivery.tmpl.html',
            // set the controller to load for this page
            controller: 'AreaDeliveryController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.AREADELIVERY',
            icon: 'zmdi zmdi-grade',
            priority: 4.6,
            state: 'triangular.admin-default.areadelivery',
            type: 'link'

        });
    }
})();
