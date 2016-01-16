(function() {
    'use strict';

    angular
        .module('app', [
            'triangular',
            'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngMaterial',
            'ui.router', 'pascalprecht.translate', 'LocalStorageModule', 'googlechart', 
            'chart.js', 'linkify', 'ui.calendar', 'angularMoment', 'textAngular', 
            'uiGmapgoogle-maps', 'hljs', 'md.data.table', angularDragula(angular),
            // uncomment above to activate the example seed module
            //'seed-module',
            'app.registrationeditbins',
            'app.registrationeditallies',
            'app.registrationeditorderstatus',
            'app.registrationeditvendors',
            'app.registrationeditcardcredit',
            'app.registrationeditaccountbank',
            'app.registrationeditmethods',
            'app.registrationeditcategories',
            'app.registrationeditaddresses',
            'app.registrationareadelivery',
            'app.registrationeditsitelocked',
            'app.registrationformalities',
            'app.registrationeditlockers',
            'app.registrationshelves',
            'app.registrationeditoffice',
            'app.registrationeditplans',
            'app.registrationeditprofile',
            'app.registrationformuladelivery',
            'app.registrationformulaloadreceive',
            'app.registrationformulaloadbuy',
            'app.registrationformulareceive',
            'app.registrationformulabuy',
            'app.registrationeditpermission',
            'app.registrationeditadministrators',
            'app.settings',
            'app.settingspecialclient',
            'app.registrationeditcontactcommerce',
            'app.registrationeditaddresscommerce',
            'app.registrationeditdepartcommerce',
            'app.registrationeditcommerce',
            'app.registrationeditcontactclient',
            'app.registrationeditclient',
            'app.detailaccountcustomer',
            'app.listclientcommerce',
            'app.subregistrationclient',
            'app.authentication'
        ])
        // create a constant for languages so they can be added to both triangular & translate
        .constant('APP_LANGUAGES', [
                  { name: 'LANGUAGES.SPANISH', key: 'es' },
                  { name: 'LANGUAGES.CHINESE', key: 'zh' },
                  { name: 'LANGUAGES.ENGLISH', key: 'en' },
                  { name: 'LANGUAGES.FRENCH', key: 'fr' },
                  { name: 'LANGUAGES.PORTUGUESE', key: 'pt' }
        ])
        // set a constant for the API we are connecting to
        .constant('API_CONFIG', {
            'url':  'http://triangular-api.oxygenna.com/'
        });
})();
