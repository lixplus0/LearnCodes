let arr = [11, 50, 98, 76, 56];
let result = arr.reduce(function (tmp, item, index) {   //求平均数
    if(index==arr.length-1){
        return (tmp+item)/arr.length;
    }else{
        return tmp+item;

    }
});
console.log(result);