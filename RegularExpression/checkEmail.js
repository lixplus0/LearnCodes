var re = /^\w+@[a-zA-Z0-9]+(\.[a-zA-Z]+){1,3}$/g;

var str = 'bue1@qq.com.cn.cm';
var result = re.test(str);
console.log(result);