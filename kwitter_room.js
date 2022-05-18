var firebaseConfig = {
  apiKey: "AIzaSyAOOQARMXydFzRjDtwk87hMCp3kcPU1P8o",
  authDomain: "letschat-71f2e.firebaseapp.com",
  databaseURL: "https://letschat-71f2e-default-rtdb.firebaseio.com",
  projectId: "letschat-71f2e",
  storageBucket: "letschat-71f2e.appspot.com",
  messagingSenderId: "242627151614",
  appId: "1:242627151614:web:166bf996188f44ad8547af",
  measurementId: "G-M18LVYTGCX"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("username")
    document.getElementById("name").innerHTML = "Welcome " + username + "!";

    function add_room(){
      name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(name).update({
            purpose: "adding room name"
      })

      localStorage.setItem("name", name)
      window.location = "kwitter_page.html"
    }

    function getData(){
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("trending_rooms").innerHTML = "";snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log(Room_names)
            row = "<div class = 'room_name' id = '"+Room_names+"' onclick = 'redirect_to_room(this.id)'>#" + Room_names + "</div><hr>"
            document.getElementById("trending_rooms").innerHTML += row;
      //End code
      });});}
getData();

function redirect_to_room(roomname){
  console.log(roomname)
  window.location = "kwitter_page.html"
  localStorage.setItem("room_names", roomname)
}

function logout(){
  localStorage.removeItem("username")
  localStorage.removeItem("room_name")

  window.location("index.html")
}
