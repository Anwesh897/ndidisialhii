var timerId = setInterval(function(){
    console.log("HI!");
},2500);

setTimeout(function(){
   clearTimeout(timerId);
},10000);
