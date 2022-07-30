
var socket = io("http://localhost:8000")   // đường link dẫn đến trang web
//init_reload();
//function init_reload(){
    //setInterval( function() {
           // window.location.reload();
     //},5000);
//}
socket.on("server-update-data", (data) => {             //Nhận dữ liệu 
    console.log(data)
    $("#P").html(" " + data.windPower.toFixed(2))
    $("#WS").html(" " + data.windSpeed.toFixed(2))
})
socket.on("server-update-data1", (data1) => {
    console.log(data1)
        $("#P1").html(" " + data1.windPower1.toFixed(2))
        $("#WS1").html(" " + data1.windSpeed1.toFixed(2))
        $("#WD1").html(" " + data1.windDirection1)
        $("#S1").html(" " + data1.windStatus1)
        /* if ( data1.windStatus1 == 'ON') {
            document.getElementById('Turbin-1').style.color = '#00CC00';
        } else {
            document.getElementById('Turbin-1').style.color = 'red';
        } */
})
socket.on("server-update-data2", (data2) => {
    console.log(data2)
    $("#P2").html(" " + data2.windPower2.toFixed(2))
    $("#WS2").html(" " + data2.windSpeed2.toFixed(2))
    $("#WD2").html(" " + data2.windDirection2)
    $("#S2").html(" " + data2.windStatus2) 
    /* if ( data2.windStatus2 == 'ON') {
        document.getElementById('Turbin-2').style.color = "green";
    } else {
        document.getElementById('Turbin-2').style.color = "red";
    } */
})
socket.on("server-update-data3", (data3) => {
    console.log(data3)
    $("#P3").html(" " + data3.windPower3.toFixed(2))
    $("#WS3").html(" " + data3.windSpeed3.toFixed(2))
    $("#WD3").html(" " + data3.windDirection3)
    $("#S3").html(" " + data3.windStatus3)
    /* if ( data3.windStatus3 == 'ON') {
        document.getElementById('Turbin-3').style.color = "green";
    } else {
        document.getElementById('Turbin-3').style.color = "red";
    } */
})
socket.on("server-update-data4", (data4) => {
    console.log(data4)
    $("#P4").html(" " + data4.windPower4.toFixed(2))
    $("#WS4").html(" " + data4.windSpeed4.toFixed(2))
    $("#WD4").html(" " + data4.windDirection4)
    $("#S4").html(" " + data4.windStatus4) 
    /* if ( data4.windStatus4 == 'ON') {
        document.getElementById('Turbin-4').style.color = "green";
    } else {
        document.getElementById('Turbin-4').style.color = "red";
    } */
})
socket.on("server-update-data5", (data5) => {
    console.log(data5)
    $("#P5").html(" " + data5.windPower5.toFixed(2))
    $("#WS5").html(" " + data5.windSpeed5.toFixed(2))
    $("#WD5").html(" " + data5.windDirection5)
    $("#S5").html(" " + data5.windStatus5) 
    /* if ( data5.windStatus5 == 'ON') {
        document.getElementById('Turbin-5').style.color = "green";
    } else {
        document.getElementById('Turbin-5').style.color = "red";
    } */
})
socket.on("server-update-data6", (data6) => {
    console.log(data6)
    $("#P6").html(" " + data6.windPower6.toFixed(2))
    $("#WS6").html(" " + data6.windSpeed6.toFixed(2))
    $("#WD6").html(" " + data6.windDirection6)
    $("#S6").html(" " + data6.windStatus6) 
    /* if ( data6.windStatus6 == 'ON') {
        document.getElementById('Turbin-6').style.color = "green";
    } else {
        document.getElementById('Turbin-6').style.color = "red";
    } */
})
socket.on("server-update-data7", (data7) => {
    console.log(data7)
    $("#P7").html(" " + data7.windPower7.toFixed(2))
    $("#WS7").html(" " + data7.windSpeed7.toFixed(2))
    $("#WD7").html(" " + data7.windDirection7)
    $("#S7").html(" " + data7.windStatus7) 
    /* if ( data7.windStatus7 == 'ON') {
        document.getElementById('Turbin-7').style.color = "green";
    } else {
        document.getElementById('Turbin-7').style.color = "red";
    } */
})
socket.on("server-update-data8", (data8) => {
    console.log(data8)
    $("#P8").html(" " + data8.windPower8.toFixed(2))
    $("#WS8").html(" " + data8.windSpeed8.toFixed(2))
    $("#WD8").html(" " + data8.windDirection8)
    $("#S8").html(" " + data8.windStatus8)
    /* if ( data8.windStatus8 == 'ON') {
        document.getElementById('Turbin-8').style.color = "green";
    } else {
        document.getElementById('Turbin-8').style.color = "red";
    } */
})
socket.on("server-update-data9", (data9) => {
    console.log(data9)
    $("#P9").html(" " + data9.windPower9.toFixed(2))
    $("#WS9").html(" " + data9.windSpeed9.toFixed(2))
    $("#WD9").html(" " + data9.windDirection9)
    $("#S9").html(" " + data9.windStatus9) 
    /* if ( data9.windStatus9 == 'ON') {
        document.getElementById('Turbin-9').style.color = "green";
    } else {
        document.getElementById('Turbin-9').style.color = "red";
    } */
})
socket.on("server-update-data10", (data10) => {
    console.log(data10)
    $("#P10").html(" " + data10.windPower10.toFixed(2))
    $("#WS10").html(" " + data10.windSpeed10.toFixed(2))
    $("#WD10").html(" " + data10.windDirection10)
    $("#S10").html(" " + data10.windStatus10) 
    /* if ( data10.windStatus10 == 'ON') {
        document.getElementById('Turbin-10').style.color = "green";
    } else {
        document.getElementById('Turbin-10').style.color = "red";
    } */
})
socket.on("server-update-data11", (data11) => {
    console.log(data11)
    $("#P11").html(" " + data11.windPower11.toFixed(2))
    $("#WS11").html(" " + data11.windSpeed11.toFixed(2))
    $("#WD11").html(" " + data11.windDirection11)
    $("#S11").html(" " + data11.windStatus11) 
    /* if ( data11.windStatus11 == 'ON') {
        document.getElementById('Turbin-11').style.color = "green";
    } else {
        document.getElementById('Turbin-11').style.color = "red";
    } */
})
socket.on("server-update-data12", (data12) => {
    console.log(data12)
    $("#P12").html(" " + data12.windPower12.toFixed(2))
    $("#WS12").html(" " + data12.windSpeed12.toFixed(2))
    $("#WD12").html(" " + data12.windDirection12)
    $("#S12").html(" " + data12.windStatus12) 
    /* if ( data12.windStatus12 == 'ON') {
        document.getElementById('Turbin-12').style.color = "green";
    } else {
        document.getElementById('Turbin-12').style.color = "red";
    } */
})

/* socket.on("server-send-loginSuccess", function(){
    alert("Login Successful!");
    window.location.href = '/windpower';
  });

  socket.on("server-send-loginFail", function(){
    alert("The username or password is incorrect!");
  });
$(document).ready(function(){
    $("#loginButton").click(function(){
        socket.emit("client-send-login", {username: $("#usernameLogin").val(), password: $("#passwordLogin").val()} );
        //socket.emit("client-send-Password", $("#passwordLogin").val());
    });

}); */
