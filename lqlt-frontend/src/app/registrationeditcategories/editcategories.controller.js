(function() {
    'use strict';

    angular
        .module('app.registrationeditcategories')
        .controller('EditCategoriesController', EditCategoriesController);
        
   /* @ngInject */

    function EditCategoriesController() {
        var vm = this;
        vm.editcategoriesClick = editcategoriesClick;
       


        function editcategoriesClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
