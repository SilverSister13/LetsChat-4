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

    room_name = localStorage.getItem("room_name")
    username = localStorage.getItem("username")

function send(){
    msg = document.getElementById("kwitter_chatpage").value = "";

    firebase.database().ref(room_name).push({
          name: username,
          message: msg,
          likes: 0
    });

    document.getElementById("kwitter_chatpage").innerHTML = "";
}

function logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("room_name")
    window.location.replace("index.html")
}
