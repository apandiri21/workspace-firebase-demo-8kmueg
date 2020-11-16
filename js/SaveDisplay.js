// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBxp6X1OSsbS_VRxIlZDXC3cLE1OffbKCE",
  authDomain: "grocerylist-6f38e.firebaseapp.com",
  databaseURL: "https://grocerylist-6f38e.firebaseio.com",
  projectId: "grocerylist-6f38e",
  storageBucket: "grocerylist-6f38e.appspot.com",
  messagingSenderId: "389435855205",
  appId: "1:389435855205:web:2667f96e169ad872cc918c",
  measurementId: "G-MTSB5QWTT1"};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$(".sampleSurvey input[type='submit']").click(function(e){
   e.preventDefault();

   // get the value of the form using SerializeArray method
  var inputdata = $(".sampleSurvey").serializeArray();
  console.log(inputdata);
var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    console.log(name + " " + value);
    inputJson[name] = value;
  }

  // console.log(inputJson);
  //var night = parseInt(inputJson["num"]);
  // var cost = parseInt(inputJson["room"].slice(-3));
  // console.log("The cost for this reservation is " + night * cost);

  /* save the data to database */
  firebase
    .firestore()
    .collection("hotelinfo")
    .add(inputJson);

  /* clear the entry */
  $("form")[0].reset();



});





// update the result in table
