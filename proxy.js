var http = require('http');
var url = require('url');
http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('pathname=' + pathname);
    var content = '';
    //目标请求地址
    var opt = {
        host: 'baidu.com',
        port: '80',
        method: 'GET',
        path: pathname
    };
    // var req = http.request(opt, function (res) {
    //     res.on('data', function (body) {
    //         console.log('return');
    //         content += body;
    //     }).on("end", function () {
    //         response.writeHead(200, {'Content-Type': 'text/html'});
    //         response.write(content);
    //         response.end();
    //     });
    // }).on('error', function (e) {
    //     console.log("Got error: " + e.message);
    // });
    // req.end();
    response.end();
}).listen(3000);//监听端口3000,将3000端口的请求转发到http://localhost:8080/
console.log("Server runing at port: " + 3000 + ".");