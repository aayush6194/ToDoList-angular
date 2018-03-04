// Initialize Firebase
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
var ref = database.ref("scores");
ref.on("value",gotData, errData);

function clearData() {
var elementss = document.getElementById("scores");
elementss.innerHTML ="";
}
function displayData(name ,score ) {

var element = document.getElementById("scores");
var parent = document.createElement("tr");
var subparaName = document.createElement("td");
var subparaScore = document.createElement("td");
var nodeName = document.createTextNode(name);
var nodeScore = document.createTextNode(score);

subparaName.appendChild(nodeName);
subparaScore.appendChild(nodeScore);
parent.appendChild(subparaName);
parent.appendChild(subparaScore);
element.appendChild(parent);
}

function gotData(data) {
if(data.val() != null){
  scores = data.val();
  keys = Object.keys(scores);

 clearData();

  for(var i = 0; i< keys.length; i++)
  {
    var k = keys[i];
    var inital = scores[k].name;
    var scoress = scores[k].score;
    displayData(inital,scoress);
  }
}
}

function errData (err){}

function submit()
{
var data = {
name:document.getElementById("name").value,
score: score
}
ref.push(data);
score = 0;
draw();
}
