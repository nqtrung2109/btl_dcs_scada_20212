var socket = io("http://localhost:8000")  

socket.on("server-send-loginSuccess-admin", function(){
    alert("Admin Login Successful!");
    window.location.href = '/windpower';
  });

  socket.on("server-send-loginSuccess-mem", function(){
    alert("Member Login Successful!");
    window.location.href = '/windpower_mem';
  });

socket.on("server-send-loginFail", function(){
    alert("The username or password is incorrect!");
  });

$(document).ready(function(){
    $("#loginButton").click(function(){
        socket.emit("client-send-login", {username: $("#usernameLogin").val(), password: $("#passwordLogin").val()} );
        //socket.emit("client-send-Password", $("#passwordLogin").val());
    });

});
