/**
 * Created by josephhoehne on 4/7/15.
 */
angular.module('clusterApp', [])
    .controller('MainCtrl', [
        '$scope', '$http',
        function ($scope, $http) {
            $scope.cluster = [];

            $scope.getMyPIDs = function(){
                $http.get('/pid').success(function(data){
                    console.log("getAll");
                    console.log(data);
                    $scope.cluster.push(data);
                });
            }
        }
    ]);