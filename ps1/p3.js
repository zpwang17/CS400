const p31 = (str,charStr) => {
	
	
	var arr=str.split(charStr);
	
	
	for(var i=1;i<arr.length;i++){
	arr[i]=charStr+arr[i];
	
	}
	
	 
 return	arr;
	
	}
 //alert(p3('supercalifragilisticexpialidocious','c'));
 
 
 const p32 = (str) =>{
 
 var sum=0;
 for(var i=0;i<str.length;i++){
 
 if(str.charAt(i)==='a'){
 
 ++sum;
 
 }
 
 } 
  
 
 var obj = {originalString:str, modifiedString:str.replace(/a/g,'A'), numberReplaced:sum, length:str.length};



 return "{\noriginalString:"+obj.originalString+",\nmodifiedString:"+obj.modifiedString+",\nnumberReplaced:"+obj.numberReplaced+",\nlength:"+obj.length+"\n"+"}";
 
 
 }