
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
})
socket.on("server-update-data2", (data2) => {
    console.log(data2)
    $("#P2").html(" " + data2.windPower2.toFixed(2))
    $("#WS2").html(" " + data2.windSpeed2.toFixed(2))
    $("#WD2").html(" " + data2.windDirection2)
    $("#S2").html(" " + data2.windStatus2) 
})
socket.on("server-update-data3", (data3) => {
    console.log(data3)
    $("#P3").html(" " + data3.windPower3.toFixed(2))
    $("#WS3").html(" " + data3.windSpeed3.toFixed(2))
    $("#WD3").html(" " + data3.windDirection3)
    $("#S3").html(" " + data3.windStatus3)
})
socket.on("server-update-data4", (data4) => {
    console.log(data4)
    $("#P4").html(" " + 0)
    $("#WS4").html(" " + 0)
    $("#WD4").html(" " + 0)
    $("#S4").html(" " + data4.windStatus4) 
})
socket.on("server-update-data5", (data5) => {
    console.log(data5)
    $("#P5").html(" " + 0)
    $("#WS5").html(" " + 0)
    $("#WD5").html(" " + 0)
    $("#S5").html(" " + data5.windStatus5) 
})
socket.on("server-update-data6", (data6) => {
    console.log(data6)
    $("#P6").html(" " + data6.windPower6.toFixed(2))
    $("#WS6").html(" " + data6.windSpeed6.toFixed(2))
    $("#WD6").html(" " + data6.windDirection6)
    $("#S6").html(" " + data6.windStatus6) 
})
socket.on("server-update-data7", (data7) => {
    console.log(data7)
    $("#P7").html(" " + data7.windPower7.toFixed(2))
    $("#WS7").html(" " + data7.windSpeed7.toFixed(2))
    $("#WD7").html(" " + data7.windDirection7)
    $("#S7").html(" " + data7.windStatus7) 
})
socket.on("server-update-data8", (data8) => {
    console.log(data8)
    $("#P8").html(" " + data8.windPower8.toFixed(2))
    $("#WS8").html(" " + data8.windSpeed8.toFixed(2))
    $("#WD8").html(" " + data8.windDirection8)
    $("#S8").html(" " + data8.windStatus8)
})
socket.on("server-update-data9", (data9) => {
    console.log(data9)
    $("#P9").html(" " + 0)
    $("#WS9").html(" " + 0)
    $("#WD9").html(" " + 0)
    $("#S9").html(" " + data9.windStatus9) 
})
socket.on("server-update-data10", (data10) => {
    console.log(data10)
    $("#P10").html(" " + data10.windPower10.toFixed(2))
    $("#WS10").html(" " + data10.windSpeed10.toFixed(2))
    $("#WD10").html(" " + data10.windDirection10)
    $("#S10").html(" " + data10.windStatus10) 
})
socket.on("server-update-data11", (data11) => {
    console.log(data11)
    $("#P11").html(" " + data11.windPower11.toFixed(2))
    $("#WS11").html(" " + data11.windSpeed11.toFixed(2))
    $("#WD11").html(" " + data11.windDirection11)
    $("#S11").html(" " + data11.windStatus11) 
})
socket.on("server-update-data12", (data12) => {
    console.log(data12)
    $("#P12").html(" " + data12.windPower12.toFixed(2))
    $("#WS12").html(" " + data12.windSpeed12.toFixed(2))
    $("#WD12").html(" " + data12.windDirection12)
    $("#S12").html(" " + data12.windStatus12) 
})

