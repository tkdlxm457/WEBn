var http = require('http');
var cookie = require('cookie');
http.createServer(function(request, response){
    var cookies = {};
    if(request.headers.cookie !== undefined){
        var cookies = cookie.parse(request.headers.cookie);
    }
    response.writeHead(200, {
        'Set-Cookie': [
            'yummy_cookie=choco', 
            'tasty_cookie_strawberry',
            `Permanent=cookies; Max-Age=${60*60*24*30}`,
            'Secure=Secure; Secure',
            'HttpOnly=HttpOnly; HttpOnly',
            'Path=Path; Path=/cookie',
            'Domain=Domain; Domain=o2.org'

        ]
    })
    response.end('Cookies!!');
}).listen(3000);