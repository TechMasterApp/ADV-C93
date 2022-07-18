// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCEhHiKAKukktEp7KZeMOLg9M7Y3LKQXio",
      authDomain: "kwitter-f9732.firebaseapp.com",
      databaseURL: "https://kwitter-f9732-default-rtdb.firebaseio.com",
      projectId: "kwitter-f9732",
      storageBucket: "kwitter-f9732.appspot.com",
      messagingSenderId: "111711607773",
      appId: "1:111711607773:web:df8b187b1cd0ada350b434"
    }
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = ""
      snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key
            Room_names = childKey
            //Start code
            document.getElementById("output").innerHTML += "<div class='room_name' id=" + Room_names + " onclick='redirect(this.id)'>" + Room_names + "</div><hr>"
            //End code
            })
      })
}
getData();

gi = localStorage.getItem("un")

function logout() {
      localStorage.removeItem("un")
      localStorage.removeItem("rn")
      window.location = "index.html"
}

document.getElementById("wt").innerHTML = "Welcome " + gi + "!"

function addRoom() {
      rn = document.getElementById("rn").value
      localStorage.setItem("rn", rn)
      firebase.database().ref("/").child(rn).update({
            purpose: "Adding room name"
      })
      window.location = "kwitter_page.html"
}

function redirect(name) {
      localStorage.setItem("rn", name)
      window.location = "kwitter_page.html"
}