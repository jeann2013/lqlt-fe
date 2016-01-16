
(function() {
    'use strict';

    angular
        .module('app.registrationeditcategories')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditcategories');

        $stateProvider
        /*.state('registrationeditcategories', {
            abstract: true,
            templateUrl: 'app/registrationeditcategories/layouts/registrationeditcategories.tmpl.html'
        })*/
        .state('triangular.admin-default.editcategories', {
            url: '/editcategories',
            templateUrl: 'app/registrationeditcategories/editcategories.tmpl.html',
            // set the controller to load for this page
            controller: 'EditCategoriesController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITCATEGORIES',
            icon: 'zmdi zmdi-grade',
            priority: 4.8,
            state: 'triangular.admin-default.editcategories',
            type: 'link'

        });
    }
})();
