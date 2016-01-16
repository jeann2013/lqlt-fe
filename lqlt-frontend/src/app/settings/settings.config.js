(function() {
    'use strict';

    angular
        .module('app.settings')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/settings');

        $stateProvider
        /*.state('settings', {
            abstract: true,
            templateUrl: 'app/settings/layouts/settings.tmpl.html'
        })*/
        .state('triangular.admin-default.setting', {
            url: '/setting',
            templateUrl: 'app/settings/setting.tmpl.html',
            // set the controller to load for this page
            controller: 'SettingsController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.SETTING',
            icon: 'zmdi zmdi-grade',
            priority: 3.1,
            state: 'triangular.admin-default.setting',
            type: 'link'

        });
    }
})();
