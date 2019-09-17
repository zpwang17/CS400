const evaluate = str => {
	var index=-1;
	var num1,num2,result;
		var computation = '';
	if(str.indexOf("+")>0){
	
	index=str.indexOf("+");
	
	computation='+';
	
	
	
	}else if(str.indexOf("-")>0){
	index=str.indexOf("-");
	
	computation='-';
	}else if(str.indexOf("*")>0){
	index=str.indexOf("*");
	
	computation='*';
	}else if(str.indexOf("%")>0){
	index=str.indexOf("%");
	
	computation='%';
	}else{
	alert("error");
	}
	
	num1=parseInt(str.substring(0,index));
	
	num2=parseInt(str.substring(index+1,str.length));
	

	
   switch (computation)
	{
	case '+':
	result=num1+num2;
	break;
	
	case '-':
	result=num1-num2;
	break;
	case '*':
	result=num1*num2;
	break;
	case '%':
	result=num1%num2;
	break;
	default:alert("str error");
	
	}
	
	
	return result;
	
	
	}
