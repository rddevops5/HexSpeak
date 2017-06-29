'use strict';

angular.module('PharmacyApp').controller('UserController',['$scope','UserService',
    function ($scope,UserService) {
    /*
     * GETTERS
     * */

    //1. Get Users
    function getusers() {
        UserService.get().then(users => {
            $scope.users = users;
        });

    }
    //invoking getUsers
    getusers();


    /*
     * SETTERS
     * */

    //1. SetUser

        $scope.addUser = function(user) {
            UserService.add(user).then(() => {
                getusers();
                user = {};
            });
        };

        $scope.deleteUser = function(id) {
            UserService.delete(id).then(() => {
                getusers();
            });
        };


        $scope.editUser = function(user,id) {
            UserService.put(user,id).then(() => {
                getusers();
            });
        }


    $scope.test="Hello";


}]);