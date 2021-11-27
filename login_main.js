function AddUser(){
    var User1 = document.getElementById("user1").value;
    var User2 = document.getElementById("user2").value;
    localStorage.setItem("User1", User1);
    localStorage.setItem("User2", User2);
    window.location = "mainpage_index.html";
}

