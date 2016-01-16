(function() {
    'use strict';

    angular
        .module('app.registrationeditprofile')
        .controller('EditProfileController', EditProfileController);
        
   /* @ngInject */

    function EditProfileController() {
        var vm = this;
        vm.editprofileClick = editprofileClick;
       
     

        function editprofileClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
