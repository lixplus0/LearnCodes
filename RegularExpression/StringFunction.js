var str = "abs-cd-safa-sd-f";

var re = [];

re.push({ "Search": str.search('u') });
re.push({ "substring": str.substring(2, 5) });
re.push({ "charAt": str.charAt(2) });
re.push({ "split": str.split('-') });

console.log(re);