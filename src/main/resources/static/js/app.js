var taskManagerModule = angular.module('taskManagerApp', ['ngAnimate','angularjs-datetime-picker']);
 
taskManagerModule.controller('taskManagerController', function ($scope,$http) {
	
	var urlBase="";
	$scope.toggle=true;
	$scope.selection = [];
	$http.defaults.headers.post["Content-Type"] = "application/json";

    function findAllMeetings() {
        //get all tasks and display initially
        $http.get(urlBase + '/meetings').
            success(function (data) {
                if (data._embedded != undefined) {
                    $scope.meetings = data._embedded.meetings;
                } else {
                    $scope.meetings = [];
                }
                $scope.mName="";
                $scope.startTime='01-01-2015 00:00:00';
                $scope.endTime='01-01-2015 00:00:00';
                $scope.toggle='!toggle';
            });
    }

    findAllMeetings();
    function findAllEmployees() {
        //get all tasks and display initially
        $http.get(urlBase + '/employees').
            success(function (data) {
                if (data._embedded != undefined) {
                    $scope.employees = data._embedded.employees;
                } else {
                    $scope.employees = [];
                }
                $scope.name="";
            });
    }
    findAllEmployees();
    function findAllRooms() {
        //get all tasks and display initially
        $http.get(urlBase + '/roomss').
            success(function (data) {
                if (data._embedded != undefined) {
                    $scope.rooms = data._embedded.roomss;
                } else {
                    $scope.rooms = [];
                }
                $scope.rName="";
            });
    }
    findAllRooms();
    
  //add a new task
	$scope.addTask = function addTask() {
		if($scope.startTime=="" || $scope.endTime=="" || $scope.eId == "" || $scope.rId == "" || $scope.mName == ""){
			alert("Insufficient Data! Please provide values.");
		}
		else{
		 $http.post(urlBase + '/meetings/create', {
			 startTime: $scope.startTime,
			 endTime: $scope.endTime,
			 mName: $scope.mName
         }).
		  success(function(data, status, headers) {
			 alert("Task added" + data);
			 findAllMeetings();
		    });
		}
	};
	
	//remove task
	$scope.removeTask = function removeTask(param) {
		 $http.delete(param)
         .success(function (data, status, headers) {
			 alert("Task deleted");
			 findAllMeetings();
         });
	};
	
	//edit task
	$scope.editView = function editView(param) {
		
		angular.element(document.querySelector('#editVie')).click();
		var str =  param;
		str= str.replace(/http:\/\/localhost:8080\/meetings\//,'');
		$http.get(urlBase + '/meetings/search/findByMId?mId='+str).
        success(function (data) {
            if (data._embedded != undefined) {
                $scope.meetings = data._embedded.meetings;
                $scope.startTime=data._embedded.meetings.startTime;
                $scope.endTime=data._embedded.meetings.endTime;
            } else {
                $scope.meetings = [];
                $scope.startTime="";
                $scope.endTime="";
            }
            
            
        });

		
	};
});

//Angularjs Directive for confirm dialog box
taskManagerModule.directive('ngConfirmClick', [
	function(){
         return {
             link: function (scope, element, attr) {
                 var msg = attr.ngConfirmClick || "Are you sure?";
                 var clickAction = attr.confirmedClick;
                 element.bind('click',function (event) {
                     if ( window.confirm(msg) ) {
                         scope.$eval(clickAction);
                     }
                 });
             }
         };
 }]);