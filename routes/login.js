//below code will run when login button is clicked
document.getElementById("login").addEventListener("click", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;  //read value of username from login page
    const password = document.getElementById("password").value;  //read value of password from login page

//checks that the username and password boxes should not be empty
    if (!username || !password) {
        alert("Please enter both username and password.");  
        return;
    }

    //authenticate the username and password. Also stores the values in local session storage
    else if (username == "test" && password == "test123") {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location.href = "dashboard.html";
    }

    //error message for wrong credentials
    else {
        alert("Wrong Login Credentials");
    }

}); 