TopClient = require('./topClient').TopClient;
var client = new TopClient({
	'appkey': 'appkey',
	'appsecret': 'secret',
	'REST_URL': 'http://gw.api.taobao.com/router/rest'
});

client.execute('taobao.time.get', {
}, function (error, response) {
	if (!error) console.log(response);
	else console.log(error);
})