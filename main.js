// Initialize Firebase
var dataMain =[];
var config = {
  apiKey: "AIzaSyBHFPTihdoaD9ho5QnElsCe-vSBzT3hfL0",
  authDomain: "to-do-list-2ce8d.firebaseapp.com",
  databaseURL: "https://to-do-list-2ce8d.firebaseio.com",
  projectId: "to-do-list-2ce8d",
  storageBucket: "to-do-list-2ce8d.appspot.com",
  messagingSenderId: "994617019947"
};
firebase.initializeApp(config);
var database = firebase.database();
var ref = database.ref("todo");

 ref.on("value",gotData, errData);


function gotData(data) {
if(data.val() != null){
  this.tasks = data.val();
  this.keys = Object.keys(this.tasks);

// clearData();

  for(var i = 0; i< this.keys.length; i++)
  {
    var k =   this.keys[i];
    var task = this.tasks[k].task;
    if(dataMain.indexOf(task)==-1)
    {
      dataMain.push(task);
  }
}
}
}

function errData (err){}





var myApp = angular.module("myApp",[]);

myApp.service("getFireBase", function(){});

myApp.controller("mainController", function($scope, $interval, $timeout){
  $scope.tasks =dataMain;
  $scope.task ="";
  $scope.error=""

    $scope.data = {};
$scope.add = function(){
      if($scope.tasks.indexOf($scope.task)==-1 && $scope.task != "" ){

        $scope.data = {
        task:$scope.task
          };
        ref.push($scope.data);

        //  $scope.error="";
      }
      else if($scope.tasks.indexOf($scope.task) > -1){
          $scope.error="Already Exists!";
          document.getElementById("error").classList.remove("collapse");
          $timeout(function(){
          document.getElementById("error").classList.add("collapse");
          },2000);
      }
}


$scope.remove = function(index){
      $scope.tasks.splice(index, 1);

    }

});
