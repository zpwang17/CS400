const p11 = n =>{
    var a = 0;
    var b = 1;
    var c = 0;
    if(n < 0){
      return 0;   
    }
    if(n == 0){
      return a;
    }else if(n == 1){
      return b
    }
    else{
       for(var i=0;i<=n-2;i++)
          {
           c = a+b; 
            a = b;
            b = c;
          }
       return c;
    } 
}
const p12 = n =>{
for(var i=0;i<n;i++){
var num=p11(i);
if(num%2==0){
console.log(num);
}else{
p11(i+1);
++n; 
}
}
}
p12(6);