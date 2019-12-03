// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAJdkw16ry5ut81S41MWSgDplhaJYn631U",
    authDomain: "trainscheduler-f59d7.firebaseapp.com",
    databaseURL: "https://trainscheduler-f59d7.firebaseio.com",
    projectId: "trainscheduler-f59d7",
    storageBucket: "trainscheduler-f59d7.appspot.com",
    messagingSenderId: "961216684965",
    appId: "1:961216684965:web:610fac3a62c142479f3e4c"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//assign variables
var database = firebase.database();

//name of the trian
var trainName = ""

//where the train is going
var destination = ""

//first train arrival for the day, user enters in military time
var firstTrainTime = ""

//how many mins inbetween trains
var frequency = ""

//time at which the next train comes, convert into "3:00 pm"
var nextArrival = ""

//how many mins away the next train is
var minsAway = ""

//how many mins it has been since the last train
var lastTrain = ""


//append the table rows into the table. 
database.ref().on("child_added", function(snapshot){
console.log(snapshot.val().trainName);
console.log(snapshot.val().destination);
console.log(snapshot.val().firstTrainTime);
console.log(snapshot.val().frequency);
console.log(snapshot.val().nextArrival);
console.log(snapshot.val().minAway);

var tr = $("<tr>");
var tdTrainName = $("<td>").text(snapshot.val().trainName);
var tdDes = $("<td>").text(snapshot.val().destination);
var tdFirstTime = $("<td>").text(snapshot.val().firstTrainTime);
var tdFrequency = $("<td>").text(snapshot.val().frequency);
var tdNextArrival = $("<td>").text(snapshot.val().nextArrival);
var tdMinsAway = $("<td>").text(snapshot.val().minsAway);

tr.append(tdTrainName, tdDes, tdFirstTime, tdFrequency, tdNextArrival, tdMinsAway);
$("tbody").append(tr);
})

//taking typed in values and converiting them into letters with no spaces. 
$("#addTrain").on("click", function(){

trainName = $("#trainName").val().trim();
destination = $("#destination").val().trim();
firstTrainTime = $("#firstTrain")
frequency = $("#frequency").val().trim();
lastTrain = 
nextArrival = moment().diff(firstTrainTime, "minutes") % frequency;
console.log(nextArrival);
minsAway = 


// getStartMonth = moment(startDate, "MMDDYYYY")
// totalMonthsWorked = moment().diff(getStartMonth, "months");
// console.log(totalMonthsWorked);
// totalPay = monthlyRate * totalMonthsWorked;
// database.ref().push({
//     name: name, 
//     role: role,
//     startDate: startDate, 
//     monthlyRate: monthlyRate,
//     totalMonthsWorked: totalMonthsWorked,
//     totalPay: totalPay
// })
});
//   





