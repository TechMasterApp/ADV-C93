function login() {
    un = document.getElementById("un").value
    localStorage.setItem("un", un)

    window.location = "kwitter_room.html"
}