function firstClick(){
    alert("You clicked the first button");
}

var secondButton = document.getElementById(".second_button").innerHTML;
secondButton.onclick = function(){
    alert("You have clicked the second button");
}

var thirdButton = document.getElementById(".third_button").innerHTML;
thirdButton.addEventListener("click",function(){
    alert("You have clicked the third button");
});