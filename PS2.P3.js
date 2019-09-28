const p3 = x =>{
return x*x*x;
}
var arr = [1,2,3,4,5,6,7];
arr.map((item,index,arr) => {
console.log(p3(item));
    return p3(item);
});