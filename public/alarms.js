
var socket = io("http://localhost:8000")   // đường link dẫn đến trang web
//init_reload();
//function init_reload(){
    //setInterval( function() {
           // window.location.reload();
     //},5000);
//}
var alarmsWindPower = [];
var alarmsWindSpeed = [];
var time;


function checkAlarms(alarmsWindPower, alarmsWindSpeed){
    for (var i=1; i<13; i++) {
        console.log("thoi gian nhan duoc:" + time);
        if (alarmsWindPower[i] > 620) {
            //alert(time);
            var txt = "";
            txt += "<tr><td>"+time+"</td>";
            txt += "<td>Component monitor</td>";
            txt += "<td>SNMP Disconnect</td>";
            txt += "<td>4-diagnostic</td>";
            txt += "<td>Turbine " +i+ " power is too high</td></tr>";
            $("#eventAlarms").append(txt);
        }
    }
}

socket.on("server-send-time", (dattime) => {
    time = dattime;
    
})

socket.on("server-update-data", (data) => {             //Nhận dữ liệu 
    alarmsWindPower[0] = data.windPower;
    alarmsWindSpeed[0] = data.windSpeed;
    checkAlarms(alarmsWindPower, alarmsWindSpeed);
})
socket.on("server-update-data1", (data1) => {
    alarmsWindPower[1] = data1.windPower1;
    alarmsWindSpeed[1] = data1.windSpeed1;
})
socket.on("server-update-data2", (data2) => {
    alarmsWindPower[2] = data2.windPower2;
    alarmsWindSpeed[2] = data2.windSpeed2;
})
socket.on("server-update-data3", (data3) => {
    alarmsWindPower[3] = data3.windPower3;
    alarmsWindSpeed[3] = data3.windSpeed3;
})
socket.on("server-update-data4", (data4) => {
    alarmsWindPower[4] = data4.windPower4;
    alarmsWindSpeed[4] = data4.windSpeed4;
})
socket.on("server-update-data5", (data5) => {
    alarmsWindPower[5] = data5.windPower5;
    alarmsWindSpeed[5] = data5.windSpeed5;
})
socket.on("server-update-data6", (data6) => {
    alarmsWindPower[6] = data6.windPower6;
    alarmsWindSpeed[6] = data6.windSpeed6;
})
socket.on("server-update-data7", (data7) => {
    alarmsWindPower[7] = data7.windPower7;
    alarmsWindSpeed[7] = data7.windSpeed7;
})
socket.on("server-update-data8", (data8) => {
    alarmsWindPower[8] = data8.windPower8;
    alarmsWindSpeed[8] = data8.windSpeed8;
})
socket.on("server-update-data9", (data9) => {
    alarmsWindPower[9] = data9.windPower9;
    alarmsWindSpeed[9] = data9.windSpeed9;
})
socket.on("server-update-data10", (data10) => {
    alarmsWindPower[10] = data10.windPower10;
    alarmsWindSpeed[10] = data10.windSpeed10;
})
socket.on("server-update-data11", (data11) => {
    alarmsWindPower[11] = data11.windPower11;
    alarmsWindSpeed[11] = data11.windSpeed11;
})
socket.on("server-update-data12", (data12) => {
    alarmsWindPower[12] = data12.windPower12;
    alarmsWindSpeed[12] = data12.windSpeed12;
})

