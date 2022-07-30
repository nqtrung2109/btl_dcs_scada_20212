var socket = io("http://localhost:8000")   // đường link dẫn đến trang web

socket.on("server-update-data1", (data1) => {
        if ( data1.windStatus1 == 'ON') {
            document.getElementById('Turbin-1').style.color = '#00CC00';
        } else {
            document.getElementById('Turbin-1').style.color = 'red';
        }
})
socket.on("server-update-data2", (data2) => {
    if ( data2.windStatus2 == 'ON') {
        document.getElementById('Turbin-2').style.color = "green";
    } else {
        document.getElementById('Turbin-2').style.color = "red";
    }
})
socket.on("server-update-data3", (data3) => { 
    if ( data3.windStatus3 == 'ON') {
        document.getElementById('Turbin-3').style.color = "green";
    } else {
        document.getElementById('Turbin-3').style.color = "red";
    }
})
socket.on("server-update-data4", (data4) => { 
    if ( data4.windStatus4 == 'ON') {
        document.getElementById('Turbin-4').style.color = "green";
    } else {
        document.getElementById('Turbin-4').style.color = "red";
    }
})
socket.on("server-update-data5", (data5) => {
    if ( data5.windStatus5 == 'ON') {
        document.getElementById('Turbin-5').style.color = "green";
    } else {
        document.getElementById('Turbin-5').style.color = "red";
    }
})
socket.on("server-update-data6", (data6) => {
    if ( data6.windStatus6 == 'ON') {
        document.getElementById('Turbin-6').style.color = "green";
    } else {
        document.getElementById('Turbin-6').style.color = "red";
    }
})
socket.on("server-update-data7", (data7) => {
    if ( data7.windStatus7 == 'ON') {
        document.getElementById('Turbin-7').style.color = "green";
    } else {
        document.getElementById('Turbin-7').style.color = "red";
    }
})
socket.on("server-update-data8", (data8) => {
    if ( data8.windStatus8 == 'ON') {
        document.getElementById('Turbin-8').style.color = "green";
    } else {
        document.getElementById('Turbin-8').style.color = "red";
    }
})
socket.on("server-update-data9", (data9) => {
    if ( data9.windStatus9 == 'ON') {
        document.getElementById('Turbin-9').style.color = "green";
    } else {
        document.getElementById('Turbin-9').style.color = "red";
    }
})
socket.on("server-update-data10", (data10) => {
    if ( data10.windStatus10 == 'ON') {
        document.getElementById('Turbin-10').style.color = "green";
    } else {
        document.getElementById('Turbin-10').style.color = "red";
    }
})
socket.on("server-update-data11", (data11) => {
    if ( data11.windStatus11 == 'ON') {
        document.getElementById('Turbin-11').style.color = "green";
    } else {
        document.getElementById('Turbin-11').style.color = "red";
    }
})
socket.on("server-update-data12", (data12) => {
    if ( data12.windStatus12 == 'ON') {
        document.getElementById('Turbin-12').style.color = "green";
    } else {
        document.getElementById('Turbin-12').style.color = "red";
    }
})
