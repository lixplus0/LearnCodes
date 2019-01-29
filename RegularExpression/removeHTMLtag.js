var re=/<[^<>]+>/g;
var re2=/<(BR|br)>/g;
var str='';
var result=str.replace(re2,'\r');
result=result.replace(re,'');
console.log(result);