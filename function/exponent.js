const power=function(base,exponent){
let result=1;
for(count=0;count<exponent;count++){
result=result*base;}
return result;
}
console.log(power(3,10));
