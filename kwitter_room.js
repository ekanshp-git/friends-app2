
const firebaseConfig = {
  apiKey: "AIzaSyC-8UxjopFsHcpLfLESbI5DiEo1kHz-MdM",
  authDomain: "friends-app-b781e.firebaseapp.com",
  databaseURL: "https://friends-app-b781e-default-rtdb.firebaseio.com",
  projectId: "friends-app-b781e",
  storageBucket: "friends-app-b781e.appspot.com",
  messagingSenderId: "150642884330",
  appId: "1:150642884330:web:a898fe604b54bd7071e193",
  measurementId: "G-D9W8DNMTHF"
};
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom() {

      room_name = document.getElementById("room_name").value;
  
      firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
      });
  
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
  }

    function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              //Start code
              console.log("Room Name -" + Room_names);
              row = "<div class= 'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
              document.getElementById("output").innerHTML += row;
          });
      });
  }
  getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}