var check = false;
$(document).ready(function(){
  $(".const").css("width","80%");
  $(".const").css("margin","auto");
  $(".head").css("position","relative");
  $(".head").css("left","60%");
  $("div.well").hide();

  $(".btn").click(function(){
    if(!check)
    {
      $("div.well").slideDown(200);
      check = true;
    }
    else{
      $("div.well").slideUp();
      check = !check;
    }
  });

});


var myApp = angular.module("myApp",[]);

myApp.service("poop", function(){
this.a = function(){
   return 0;
}
 });

myApp.controller("mainController",function($scope, $timeout, $http , $log, poop){
  $scope.name ="";


    $scope.character = 10;
    $scope.rules = [
      {rulename: "Must be more than 5 character."},
      {rulename: "Must be Less than 10 character."}
    ];
    // $http.get()
    //     .sucess( function (result){
    //    //     })
    //     .error( function(data, status) {
    //    //     });
    // $timeout(function(){
      // },1000);
      //interterval, log
     $scope.a = poop.a();
});



myApp.controller("second", function ($scope){
  $scope.name ="poop";

});



var config = {
  apiKey: "AIzaSyDkgSu1frbmlTWVYPy8c8vMib_xN-X8Y6E",
  authDomain: "project-1-e481f.firebaseapp.com",
  databaseURL: "https://project-1-e481f.firebaseio.com",
  projectId: "project-1-e481f",
  storageBucket: "",
  messagingSenderId: "336253882287"
};

firebase.initializeApp(config);
var database = firebase.database();
var ref = database.ref("rules");


ref.on("value", gotData, gotError);


function gotData (data) {

}

function gotError( error){



}
