
const { randomBytes } = require('crypto') // biến tạo giá trị ngẫu nhiên trong phạm vi cụ thể ở dạng byte, cần chuyển sang hex or dec
                                          // cryto là mã hóa và giải mã chuỗi
var express = require('express')  // Module xử lí chung
var mysql = require('mysql2')     // Module cho phép sử dụng cơ sở dữ liệu mySQL 
const { mainModule } = require('process')

var app = express()               // Khai báo biến app đại diện cho server
var port = 8000                   // Port của localhost do mình chọn

app.use(express.static("public")) // Link thư mục chứa các file thành phần
app.set("views engine", "ejs")    // Module ejs giúp triển khai giao diện web
app.set("views", "./views")       // Link thư mục chứa file giao diện

var server = require("http").Server(app) // Module Triển khai giao thức HTTP để chạy được một trang web
var io = require('socket.io')(server)    // Module Socket.io dùng để truyền nhận dữ liệu trong nội bộ server

server.listen(port, function () {        // // server lắng nghe địa chỉ port để start
    console.log('Server listening on port ' + port)
})
//-----------------------gửi html đến client----------------------------
app.get('/', function (req, res) {
    res.render('login.ejs')     
})
app.get('/windpower', function (req, res) {
    res.render('windpower.ejs')    
})
app.get('/alert', function (req, res) {
    res.render('alert.ejs')     
})
app.get('/turbin1', function (req, res) {
    res.render('turbin1.ejs')     
})
app.get('/turbin2', function (req, res) {
    res.render('turbin2.ejs')     
})
app.get('/turbin3', function (req, res) {
    res.render('turbin3.ejs')     
})
app.get('/turbin4', function (req, res) {
    res.render('turbin4.ejs')     
})
app.get('/turbin5', function (req, res) {
    res.render('turbin5.ejs')     
})
app.get('/turbin6', function (req, res) {
    res.render('turbin6.ejs')     
})
app.get('/turbin7', function (req, res) {
    res.render('turbin7.ejs')     
})
app.get('/turbin8', function (req, res) {
    res.render('turbin8.ejs')     
})
app.get('/turbin9', function (req, res) {
    res.render('turbin9.ejs')     
})
app.get('/turbin10', function (req, res) {
    res.render('turbin10.ejs')     
})
app.get('/turbin11', function (req, res) {
    res.render('turbin11.ejs')     
})
app.get('/turbin12', function (req, res) {
    res.render('turbin12.ejs')     
})
//-------------------------Khai báo cơ sở dữ liệu--------------------
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'trung2109',
    database: 'windpower'
});
//---------------------Tạo bảng trong cơ sở dữ liệu-------------------
con.connect(function (err) {                  // check và ném lỗi ???
    console.log("mysql connected")            // CREATE TABLE IF NOT EXISTS = tạo bảng nếu không tồn tại
    if (err) throw err
    console.log("mysql connected")
    var site = "CREATE TABLE IF NOT EXISTS site(ID int(10) not null primary key auto_increment, TocDoGio float not null, CongSuat float not null)"
    con.query(site, function (err) {         // Thực hiện câu lệnh var
        if (err) throw err
        console.log("Table created")
    });
})
con.connect(function (err) {
    if (err) throw err
    console.log("mysql connected")
    var turbine1 = "CREATE TABLE IF NOT EXISTS turbine1(ID int(10) not null primary key auto_increment, TocDoGio float not null, CongSuat float not null, HuongGio nvarchar(20) not null, TrangThai varchar(10) not null)"
    con.query(turbine1, function (err) {
        if (err) throw err
        console.log("Table created")
    });
})
con.connect(function (err) {
    if (err) throw err
    console.log("mysql connected")
    var turbine2 = "CREATE TABLE IF NOT EXISTS turbine2(ID int(10) not null primary key auto_increment, TocDoGio float not null, CongSuat float not null, HuongGio nvarchar(20) not null, TrangThai varchar(10) not null)"
    con.query(turbine2, function (err) {
        if (err) throw err
        console.log("Table created")
    });
})
con.connect(function (err) {
    if (err) throw err
    console.log("mysql connected")
    var turbine3 = "CREATE TABLE IF NOT EXISTS turbine3(ID int(10) not null primary key auto_increment, TocDoGio float not null, CongSuat float not null, HuongGio nvarchar(20) not null, TrangThai varchar(10) not null)"
    con.query(turbine3, function (err) {
        if (err) throw err
        console.log("Table created")
    });
})
con.connect(function (err) {
    if (err) throw err
    console.log("mysql connected")
    var turbine4 = "CREATE TABLE IF NOT EXISTS turbine4(ID int(10) not null primary key auto_increment, TocDoGio float not null, CongSuat float not null, HuongGio nvarchar(20) not null, TrangThai varchar(10) not null)"
    con.query(turbine4, function (err) {
        if (err) throw err
        console.log("Table created")
    });
})
con.connect(function (err) {
    if (err) throw err
    console.log("mysql connected")
    var turbine5 = "CREATE TABLE IF NOT EXISTS turbine5(ID int(10) not null primary key auto_increment, TocDoGio float not null, CongSuat float not null, HuongGio nvarchar(20) not null, TrangThai varchar(10) not null)"
    con.query(turbine5, function (err) {
        if (err) throw err
        console.log("Table created")
    });
})
con.connect(function (err) {
    if (err) throw err
    console.log("mysql connected")
    var turbine6 = "CREATE TABLE IF NOT EXISTS turbine6(ID int(10) not null primary key auto_increment, TocDoGio float not null, CongSuat float not null, HuongGio nvarchar(20) not null, TrangThai varchar(10) not null)"
    con.query(turbine6, function (err) {
        if (err) throw err
        console.log("Table created")
    });
})
con.connect(function (err) {
    if (err) throw err
    console.log("mysql connected")
    var turbine7 = "CREATE TABLE IF NOT EXISTS turbine7(ID int(10) not null primary key auto_increment, TocDoGio float not null, CongSuat float not null, HuongGio nvarchar(20) not null, TrangThai varchar(10) not null)"
    con.query(turbine7, function (err) {
        if (err) throw err
        console.log("Table created")
    });
})
con.connect(function (err) {
    if (err) throw err
    console.log("mysql connected")
    var turbine8 = "CREATE TABLE IF NOT EXISTS turbine8(ID int(10) not null primary key auto_increment, TocDoGio float not null, CongSuat float not null, HuongGio nvarchar(20) not null, TrangThai varchar(10) not null)"
    con.query(turbine8, function (err) {
        if (err) throw err
        console.log("Table created")
    });
})
con.connect(function (err) {
    if (err) throw err
    console.log("mysql connected")
    var turbine9 = "CREATE TABLE IF NOT EXISTS turbine9(ID int(10) not null primary key auto_increment, TocDoGio float not null, CongSuat float not null, HuongGio nvarchar(20) not null, TrangThai varchar(10) not null)"
    con.query(turbine9, function (err) {
        if (err) throw err
        console.log("Table created")
    });
})
con.connect(function (err) {
    if (err) throw err
    console.log("mysql connected")
    var turbine10 = "CREATE TABLE IF NOT EXISTS turbine10(ID int(10) not null primary key auto_increment, TocDoGio float not null, CongSuat float not null, HuongGio nvarchar(20) not null, TrangThai varchar(10) not null)"
    con.query(turbine10, function (err) {
        if (err) throw err
        console.log("Table created")
    });
})
con.connect(function (err) {
    if (err) throw err
    console.log("mysql connected")
    var turbine11 = "CREATE TABLE IF NOT EXISTS turbine11(ID int(10) not null primary key auto_increment, TocDoGio float not null, CongSuat float not null, HuongGio nvarchar(20) not null, TrangThai varchar(10) not null)"
    con.query(turbine11, function (err) {
        if (err) throw err
        console.log("Table created")
    });
})
con.connect(function (err) {
    if (err) throw err
    console.log("mysql connected")
    var turbine12 = "CREATE TABLE IF NOT EXISTS turbine12(ID int(10) not null primary key auto_increment, TocDoGio float not null, CongSuat float not null, HuongGio nvarchar(20) not null, TrangThai varchar(10) not null)"
    con.query(turbine12, function (err) {
        if (err) throw err
        console.log("Table created")
    });
})
// ---------------------Các mảng chứa dữ liệu tạm thời---------------------------
var windSpeed                      // tốc độ gió tb site
var windPower                      // tổng công suất gió site
var windSpeed1                     // tốc độ gió turbine x
var windPower1                     // công suất gió turbine x
var windDirection1                 // hướng gió turbine x
var windStatus1                    // trạng thái turbine x
var windSpeed2
var windPower2
var windDirection2
var windStatus2
var windSpeed3
var windPower3
var windDirection3
var windStatus3
var windSpeed4
var windPower4
var windDirection4
var windStatus4
var windSpeed5
var windPower5
var windDirection5
var windStatus5
var windSpeed6
var windPower6
var windDirection6
var windStatus6
var windSpeed7
var windPower7
var windDirection7
var windStatus7
var windSpeed8
var windPower8
var windDirection8
var windStatus8
var windSpeed9
var windPower9
var windDirection9
var windStatus9
var windSpeed10
var windPower10
var windDirection10
var windStatus10
var windSpeed11
var windPower11
var windDirection11
var windStatus11
var windSpeed12
var windPower12
var windDirection12
var windStatus12
// ---------------------lấy giá trị từ CSDL ra, gửi lên trong giao diện-----------------------------
var sql_site = "SELECT * FROM site ORDER BY ID DESC limit 1"  //Chọn giá trị theo cột, lấy giá trị mới nhất
var sql_turbine1 = "SELECT * FROM turbine1 ORDER BY ID DESC limit 1"
var sql_turbine2 = "SELECT * FROM turbine2 ORDER BY ID DESC limit 1"
var sql_turbine3 = "SELECT * FROM turbine3 ORDER BY ID DESC limit 1"
var sql_turbine4 = "SELECT * FROM turbine4 ORDER BY ID DESC limit 1"
var sql_turbine5 = "SELECT * FROM turbine5 ORDER BY ID DESC limit 1"
var sql_turbine6 = "SELECT * FROM turbine6 ORDER BY ID DESC limit 1"
var sql_turbine7 = "SELECT * FROM turbine7 ORDER BY ID DESC limit 1"
var sql_turbine8 = "SELECT * FROM turbine8 ORDER BY ID DESC limit 1"
var sql_turbine9 = "SELECT * FROM turbine9 ORDER BY ID DESC limit 1"
var sql_turbine10 = "SELECT * FROM turbine10 ORDER BY ID DESC limit 1"
var sql_turbine11 = "SELECT * FROM turbine11 ORDER BY ID DESC limit 1"
var sql_turbine12 = "SELECT * FROM turbine12 ORDER BY ID DESC limit 1"
setInterval(      // gọi 1 hàm thực hiện trong một thời gian nhất định (ms), lặp lại cho đến khi có clearInterval() được gọi hoặc đóng cửa số làm việc
    function () {
        con.query(sql_site, function (err, result) {     // chọn dữ liệu từ biến var lấy giá trị trong CSDL 
            if (err) throw err
            console.log("Data selected");
            result.forEach(function (value) {    
                console.log(value)                
                windSpeed = value.TocDoGio;     //Lấy ra các trường giá trong bảng, gán vào biến trung gian /  + Math.floor(Math.random()*2)
                // windPower = value.CongSuat + Math.floor(Math.random()*100);  
                console.log(windSpeed + "/ " + windPower );
            })
        })
        // io.on("connection", () => {    //Khởi tạo kết nốt server
        //     // io.emit('server-update-data', { windSpeed, windPower })      //Truyền dữ liệu nội bộ server
        //     // io.emit('server-update-line', {windSpeed, windPower})
        //     // console.log(windSpeed + " + " + windPower);
        // });
        con.query(sql_turbine1, function (err, result) {
            if (err) throw err
            console.log("Data selected");
            result.forEach(function (value1) {         // một hàm mảng được sử dụng để lặp lại các mục trong một mảng nhất định.
                console.log(value1)
                windSpeed1 = value1.TocDoGio + Math.floor(Math.random()*2);           // cộng thêm với gía trị ngẫu nhiên từ 0 đến 1
                windPower1 = value1.CongSuat + Math.floor(Math.random()*100);         // cộng thêm với gía trị ngẫu nhiên từ 0 đến 1
                windDirection1 = value1.HuongGio
                windStatus1 = value1.TrangThai
                console.log("tb1: " + windSpeed1 + " / " + windPower1 + " / " + windDirection1 + " / " + windStatus1);
            })
        })
        con.query(sql_turbine2, function (err, result) {
            if (err) throw err
            console.log("Data selected");
            result.forEach(function (value2) {
                console.log(value2)
                windSpeed2 = value2.TocDoGio + Math.floor(Math.random()*2); 
                windPower2 = value2.CongSuat + Math.floor(Math.random()*100); 
                windDirection2 = value2.HuongGio
                windStatus2 = value2.TrangThai
                console.log("tb2: " + windSpeed2 + " / " + windPower2 + " / " + windDirection2 + " / " + windStatus2);
            })
        })
        con.query(sql_turbine3, function (err, result) {
            if (err) throw err
            console.log("Data selected");
            result.forEach(function (value3) {
                console.log(value3)
                windSpeed3 = value3.TocDoGio + Math.floor(Math.random()*2); 
                windPower3 = value3.CongSuat + Math.floor(Math.random()*100); 
                windDirection3 = value3.HuongGio
                windStatus3 = value3.TrangThai
                console.log("tb3: " + windSpeed3 + " / " + windPower3 + " / " + windDirection3 + " /" + windStatus3);
            })
        })
        con.query(sql_turbine4, function (err, result) {
            if (err) throw err
            console.log("Data selected");
            result.forEach(function (value4) {
                console.log(value4)
                windSpeed4 = value4.TocDoGio + Math.floor(Math.random()*2); 
                windPower4 = value4.CongSuat + Math.floor(Math.random()*100); 
                windDirection4 = value4.HuongGio
                windStatus4 = value4.TrangThai
                console.log("tb4: " + windSpeed4 + " / " + windPower4 + " / " + windDirection4 + " / " + windStatus4);
            })
        })
        con.query(sql_turbine5, function (err, result) {
            if (err) throw err
            console.log("Data selected");
            result.forEach(function (value5) {
                console.log(value5)
                windSpeed5 = value5.TocDoGio + Math.floor(Math.random()*2); 
                windPower5 = value5.CongSuat + Math.floor(Math.random()*100); 
                windDirection5 = value5.HuongGio
                windStatus5 = value5.TrangThai
                console.log("tb5: " + windSpeed5 + " / " + windPower5 + " / " + windDirection5 + " / " + windStatus5);
            })
        })
        con.query(sql_turbine6, function (err, result) {
            if (err) throw err
            console.log("Data selected");
            result.forEach(function (value6) {
                console.log(value6)
                windSpeed6 = value6.TocDoGio + Math.floor(Math.random()*2); 
                windPower6 = value6.CongSuat + Math.floor(Math.random()*100); 
                windDirection6 = value6.HuongGio
                windStatus6 = value6.TrangThai
                console.log("tb6: " + windSpeed6 + " / " + windPower6 + " / " + windDirection6 + " / " + windStatus6);
            })
        })
        con.query(sql_turbine7, function (err, result) {
            if (err) throw err
            console.log("Data selected");
            result.forEach(function (value7) {
                console.log(value7)
                windSpeed7 = value7.TocDoGio + Math.floor(Math.random()*2); 
                windPower7 = value7.CongSuat + Math.floor(Math.random()*100); 
                windDirection7 = value7.HuongGio
                windStatus7 = value7.TrangThai
                console.log("tb7: " + windSpeed7 + " / " + windPower7 + " / " + windDirection7 + " / " + windStatus7);
            })
        })
        con.query(sql_turbine8, function (err, result) {
            if (err) throw err
            console.log("Data selected");
            result.forEach(function (value8) {
                console.log(value8)
                windSpeed8 = value8.TocDoGio + Math.floor(Math.random()*2); 
                windPower8 = value8.CongSuat + Math.floor(Math.random()*100); 
                windDirection8 = value8.HuongGio
                windStatus8 = value8.TrangThai
                console.log("tb8: " + windSpeed8 + " / " + windPower8 + " / " + windDirection8 + " / " + windStatus8);
            })
        })
        con.query(sql_turbine9, function (err, result) {
            if (err) throw err
            console.log("Data selected");
            result.forEach(function (value9) {
                console.log(value9)
                windSpeed9 = value9.TocDoGio + Math.floor(Math.random()*2); 
                windPower9 = value9.CongSuat + Math.floor(Math.random()*100); 
                windDirection9 = value9.HuongGio
                windStatus9 = value9.TrangThai
                console.log("tb9: " + windSpeed9 + " / " + windPower9 + " / " + windDirection9 + " / " + windStatus9);
            })
        })
        con.query(sql_turbine10, function (err, result) {
            if (err) throw err
            console.log("Data selected");
            result.forEach(function (value10) {
                console.log(value10)
                windSpeed10 = value10.TocDoGio + Math.floor(Math.random()*2); 
                windPower10 = value10.CongSuat + Math.floor(Math.random()*100); 
                windDirection10 = value10.HuongGio
                windStatus10 = value10.TrangThai
                console.log("tb10: " + windSpeed10 + " / " + windPower10 + " / " + windDirection10 + " / " + windStatus10);
            })
        })
        con.query(sql_turbine11, function (err, result) {
            if (err) throw err
            console.log("Data selected");
            result.forEach(function (value11) {
                console.log(value11)
                windSpeed11 = value11.TocDoGio + Math.floor(Math.random()*2); 
                windPower11 = value11.CongSuat + Math.floor(Math.random()*100); 
                windDirection11 = value11.HuongGio
                windStatus11 = value11.TrangThai
                console.log("tb11: " + windSpeed11 + " / " + windPower11 + " / " + windDirection11 + " / " + windStatus11);
            })
        })
        con.query(sql_turbine12, function (err, result) {
            if (err) throw err
            console.log("Data selected");
            result.forEach(function (value12) {
                console.log(value12)
                windSpeed12 = value12.TocDoGio + Math.floor(Math.random()*2); 
                windPower12 = value12.CongSuat + Math.floor(Math.random()*100); 
                windDirection12 = value12.HuongGio
                windStatus12 = value12.TrangThai
                console.log("tb12: " + windSpeed12 + " / " + windPower12 + " / " + windDirection12 + " / " + windStatus12);
            })
        })
        windPower = windPower1+windPower2+windPower3+windPower4+windPower5+windPower6+windPower7+windPower8+windPower9+windPower10+windPower11+windPower12;  // tổng công suất
        io.on("connection", () => {
            io.emit('server-update-data1', { windSpeed1, windPower1, windDirection1,windStatus1 })   // io.emit gửi dữ liệu đến tất cả client
            // console.log(windSpeed1 + " + " + windPower1 + " + " + windDirection1 + " + " + windStatus1);
            io.emit('server-update-data2', { windSpeed2, windPower2, windDirection2,windStatus2 })
            // console.log(windSpeed2 + " + " + windPower2 + " + " + windDirection2 + " + " + windStatus2);
            io.emit('server-update-data3', { windSpeed3, windPower3, windDirection3,windStatus3 })
            // console.log(windSpeed3 + " + " + windPower3 + " + " + windDirection3 + " + " + windStatus3);
            io.emit('server-update-data4', { windSpeed4, windPower4, windDirection4,windStatus4 })
            // console.log(windSpeed4 + " + " + windPower4 + " + " + windDirection4 + " + " + windStatus4);
            io.emit('server-update-data5', { windSpeed5, windPower5, windDirection5,windStatus5 })
            // console.log(windSpeed5 + " + " + windPower5 + " + " + windDirection5 + " + " + windStatus5);
            io.emit('server-update-data6', { windSpeed6, windPower6, windDirection6,windStatus6 })
            // console.log(windSpeed6 + " + " + windPower6 + " + " + windDirection6 + " + " + windStatus6);
            io.emit('server-update-data7', { windSpeed7, windPower7, windDirection7,windStatus7 })
            // console.log(windSpeed7 + " + " + windPower7 + " + " + windDirection7 + " + " + windStatus7);
            io.emit('server-update-data8', { windSpeed8, windPower8, windDirection8,windStatus8 })
            // console.log(windSpeed8 + " + " + windPower8 + " + " + windDirection8 + " + " + windStatus8);
            io.emit('server-update-data9', { windSpeed9, windPower9, windDirection9,windStatus9 })
            // console.log(windSpeed9 + " + " + windPower9 + " + " + windDirection9 + " + " + windStatus9);
            io.emit('server-update-data10', { windSpeed10, windPower10, windDirection10,windStatus10 })
            // console.log(windSpeed10 + " + " + windPower10 + " + " + windDirection10 + " + " + windStatus10);
            io.emit('server-update-data11', { windSpeed11, windPower11, windDirection11,windStatus11 })
            // console.log(windSpeed11 + " + " + windPower11 + " + " + windDirection11 + " + " + windStatus11);
            io.emit('server-update-data12', { windSpeed12, windPower12, windDirection12,windStatus12 })
            // console.log(windSpeed12 + " + " + windPower12 + " + " + windDirection12 + " + " + windStatus12);
            io.emit('server-update-barchar',{windPower1,windPower2,windPower3,windPower4,windPower5,windPower6,windPower7,windPower8,windPower9,windPower10,windPower11,windPower12})
            io.emit('server-update-data', { windSpeed, windPower })      //Truyền dữ liệu nội bộ server
            io.emit('server-update-line', {windSpeed, windPower})
        });
    }, 3000
)



 
  