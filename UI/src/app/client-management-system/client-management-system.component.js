angular.module("clientModule",[])
    .component("clientsystem",{
        templateUrl:"app/client-management-system/client-management-system.component.html",
        controller:function($scope,$http){
            $scope.title="client management system";
            $scope.clientList = {}; //empty client List
			$scope.dataList = [];
			//CREATE
            $scope.addClient = function(){
                $http({
					url: 'http://localhost:4000/create',
					method: 'POST',
					data: $scope.clientList
				}).then(function (httpResponse) {
						alert(httpResponse.data);
						console.log(httpResponse.data);
				});
				$scope.retrieveAll();
                //not working beacuse object not created ClearValues();   //clear all the values from inputs
            };
            //UPDATE
            $scope.updateClient = function(){
               $http({
					url: 'http://localhost:4000/update',
					method: 'POST',
					data: $scope.clientList
				}).then(function (httpResponse) {
						alert(httpResponse.data);
						console.log(httpResponse.data);
				});
				
            }
			
           //DELETE
            $scope.deleteClient = function(client){
                //var index = $scope.clientList.indexOf(client);
                //$scope.clientList.splice(index,1);
                console.log(client);
                /*$http({
					url: 'http://localhost:4000/update',
					method: 'POST',
					data: $scope.clientList
				}).then(function (httpResponse) {
						alert(httpResponse.data);
						console.log(httpResponse.data);
				});*/
            }
			
			$scope.retrieveAll = function(){
				$http({
					url: 'http://localhost:4000/retrieve',
					method: 'GET'
				}).then(function (httpResponse) {
						$scope.dataList = httpResponse.data;
				});
			}
			
           function ClearValues(){
               $scope.Id='';
               $scope.Name='';
               $scope.Address='';
               $scope.Email='';
               $scope.PhoneNumber='';
           } 
        }
    });
