
function Resul()
{
	var arr = [];
	var arr1 =[];
	var arr2 =[];
	var i=0,c=0,z=0,g=0,j=0,p=0,q=0,e=0,d=1,f=0,res=0,st=0,k=0;
	var quantity = document.getElementById("quantity").value;
	try{
		c=eval(quantity);
	}
	catch(e)
	{
	alert("Cкобцькі невірні!!");
	}
	
  
  
	document.getElementById("quantity").value=c;
  

	
}	


function deleate()
{
var del;
var quantity = document.getElementById("quantity").value;
del=quantity.slice(0, -1);
document.getElementById("quantity").value=del;

}
function onklik()
{
  var  stack="";
  var i=0,r=0;
  var q="";
  var x =  document.getElementById("quantity").value;
  x=Number(x);
  while(x>=1){
    if(x%2>0)stack+="1";else
    stack+="0";
    i++; 
    x/=2;
    r++;
  }
  stack=stack.split("").reverse().join("");
 document.getElementById("quantity").value=stack;

}


