let myValue = "Pat"
let myValue1 = "123asdqwe"
localStorage.setItem("myValue", myValue)
localStorage.setItem("myValue1", myValue1)

function checkField(event) {
    event.preventDefault();
    let uname = document.getElementById("name").value.trim()
    let pass = document.getElementById("pass").value.trim()
    document.getElementById("name-msg").innerHTML = ""
    document.getElementById("pass-msg").innerHTML = ""

    if (uname == "") {
        document.getElementById("name-msg").innerHTML = "Empty! Please Enter Username"
    } else if (uname != myValue) {
        document.getElementById("name-msg").innerHTML = "Incorrect Username!!!"
    }

    if (pass == "") {
        document.getElementById("pass-msg").innerHTML = "Empty! Please Enter Password"
    } else if (pass >= 8) {
        document.getElementById("pass-msg").innerHTML = "Password must have atleast 8 characters"
    } else if (pass != myValue1) {
        document.getElementById("pass-msg").innerHTML = "Incorrect Password!!!"
    } else if (uname == myValue && pass == myValue1) {
        alert("Login Successful")
        location.href = './Todo.html'
        document.getElementById("name").value = ""
        document.getElementById("password").value = ""
    }
}

