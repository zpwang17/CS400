const p1 = str => {
	var p = /[a-z]/i; 
   var len = str.length;
   var tempArr = [];
   for (var i = 0; i < len; i++) {
  if(p.test(str.charAt(i))){
  tempArr.push(str.charAt(i));
  }
   }
   tempArr = tempArr.sort();
  str = tempArr.join('');
  return str;
 }

 ///example: alert(p1('9, 38asupercalifragilisticexpialidocious')); output: aaaacccdeefgiiiiiiillloopprrssstuux 
 