
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBXTsBtGY38_R2AUTNCIVjUEgWe8TonjwM",
    authDomain: "sceduledtrains.firebaseapp.com",
    databaseURL: "https://sceduledtrains.firebaseio.com",
    projectId: "sceduledtrains",
    storageBucket: "sceduledtrains.appspot.com",
    messagingSenderId: "571041056862",
    appId: "1:571041056862:web:952ead38f4f4c4f1428ccf"
  };
 


firebase.initializeApp(firebaseConfig);
// Initialize Firebase
var database = firebase.database();

$("#addTrain").on("click", function(event) {
  event.preventDefault();

  //assign variables
//name of the trian, user input
var trainName = $("#trainName").val().trim();

//where the train is going
var destination = $("#destination").val().trim();

//first train arrival for the day, user enters in military time
var firstTrainTime = $("#firstTrain").val().trim();

//how many mins inbetween trains
var frequency = $("#frequency").val().trim();

//creating variables for momentjs stuff
var firstTrainTimeConverted = moment(firstTrainTime, "HH:mm")
// console.log(firstTrainTimeConverted);

var diffTime = moment().diff(moment(firstTrainTimeConverted), "minutes");
// console.log(diffTime);

var tRemainder = diffTime % frequency;
// console.log(tRemainder);

//how many mins away the next train is
var minsAway = frequency - tRemainder;
console.log("minutes until Train: " + minsAway);

//time at which the next train comes
var nextArrival = moment().add(minsAway, "minutes").format("hh:mm");
console.log("arrival time: " + moment(nextArrival));

  //creates local object for holding train info 
 var newTrain = {
    train: trainName, 
    des: destination, 
    firstTrain: firstTrainTime, 
    freq: frequency,
    nextTrain: nextArrival,
    mins: minsAway
  };
  console.log(newTrain);

  //uploads info to database
  database.ref().push(newTrain);
  //logs everything to console
  // console.log(newTrain.train);
  // console.log(newTrain.des);
  // console.log(newTrain.firstTrain);
  // console.log(newTrain.freq);

  //alerts new train is added
  alert("Train Successfully Added!");

  //clear input boxes
  $("#trainName").val("");
  $("#destination").val("");
  $("#firstTrain").val("");
  $("#frequency").val("");
});

database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  //store in a variable 
  trainName = childSnapshot.val().train;
  destination = childSnapshot.val().des;
  firstTrainTime = childSnapshot.val().firstTrain;
  frequency = childSnapshot.val().freq;
  nextArrival = childSnapshot.val().nextTrain;
  minsAway = childSnapshot.val().mins;

  //console newtrain info
  console.log(trainName);
  console.log(destination);
  console.log(firstTrainTime);
  console.log(frequency);
  console.log(nextArrival);
  console.log(minsAway);

  var newTrains = $("<tr>").append(
  $("<td>").text(trainName),
  $("<td>").text(destination),
  $("<td>").text(firstTrainTime),
  $("<td>").text(frequency),
  $("<td>").text(nextArrival),
  $("<td>").text(minsAway)

  );

  $("#trainTable > tbody").append(newTrains);
});



// var currentTime = moment();
// var differenceTime = moment().diff(moment(firstTrainTimeConverted), "minutes");
// var timeRemainder = differenceTime % frequency;
// minsAway = frequency - timeRemainder;
// var nextTrain = moment().add(minsAway, "minutes");
// moment(nextTrain).format("hh:mm");

