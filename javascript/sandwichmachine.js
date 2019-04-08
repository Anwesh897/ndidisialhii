//This script is included in sandwich.html to check script functionality open html file

(function myFunction(){
function bread(){
  
   setTimeout(function(){
     //clearTimeout(timerId_1);
     document.getElementById("01").innerHTML=instruction.step1;
   },1000);
   ;  
}
//var step_1 = bread();

function soyaMargrine(){
  
  setTimeout(function(){
  document.getElementById("02").innerHTML=instruction.step2;
  },4000);}
//var step_2 = soyaMargrine();

function jam(){
 
setTimeout(function(){
  document.getElementById("03").innerHTML=instruction.step3;
},7000);

}
//var step_3 = jam();
function step_4(){ 
 
setTimeout(function(){
  document.getElementById("04").innerHTML=instruction.step4;
},10000);

}

function step_5(){
  
  setTimeout(function(){
    document.getElementById("05").innerHTML=instruction.step5;
  },13000);
}


var instruction = {
  
  step1:"Step_1 to make sandwich is to Add pair of bread slices",
  step2:"Now our next step is to add soya margrine on either side of slices",
  step3:"Followed by the finisher i.e adding jam",
  step4:"YuP our sandwich is ready...!",
  step5:"Yum delicious"
};

  function makeSandwich(){
   bread();
   soyaMargrine();
   jam();
   step_4();
   step_5(); 
  }
  var stepAll = makeSandwich();

})();
