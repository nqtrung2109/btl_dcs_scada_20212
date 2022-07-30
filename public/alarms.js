
var socket = io("http://localhost:8000")   // đường link dẫn đến trang web

var alarmsWindPower = [];
var alarmsWindSpeed = [];
var time;
//var time2;
var count=0;

function checkSystem(){
    for (var i=1; i<13; i++) {
        // console.log("thoi gian nhan duoc:" + time);
        if (alarmsWindPower[i] == 0) {
            //alert(time);
            count = count + 1;
        }
    }
    var txt = "";
        txt += "<tr><td>"+ time +"</td>";
        txt += "<td> SM_InSys_SystemOK </td>";
        txt += "<td> System OK </td>";
        txt += "<td> Information </td>";
        $("#eventAlarms").append(txt); 
    txt = "";
        txt += "<tr><td>"+ time +"</td>";
        txt += "<td> SM_CtrlSegGrpTurbIncompl_b1 </td>";
        txt += "<td> "+ count +" of configured turbines incomplete</td>";
        txt += "<td> Warning </td>";
        $("#eventAlarms").append(txt); 
    count = 0; 
    if ( alarmsWindSpeed[0] > 5.3){
        var txt = "";
        txt += "<tr><td>"+ time +"</td>";
        txt += "<td> SM_InWTG_HighWindSpeed </td>";
        txt += "<td> High Wind Speed Alarm </td>";
        txt += "<td> Information </td>";
        $("#eventAlarms").append(txt); 
    }
}
socket.on("server-send-time", (dattime) => {
    time = dattime;
    checkSystem();
})

// socket.on("server-send-time2", (dattime2) => {
//     time2 = dattime2;
//     checkSystem();
// })
socket.on("server-update-data", (data) => {             //Nhận dữ liệu 
    alarmsWindPower[0] = data.windPower;
    alarmsWindSpeed[0] = data.windSpeed;
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

