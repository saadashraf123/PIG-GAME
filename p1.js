var scores,roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


var x = document.querySelector("#score-0"),textContent;

document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click",function(){
    
    //1.random number.
    var dice = Math.floor(Math.random()*6+1);

    //2.display the number
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";

    //3.show the result if the number isn't 1..
    function add(){
        const x = document.querySelector("#current-0").textContent;
        var sum = parseInt(dice) + parseInt(x) ;
        document.querySelector("#current-0").textContent = sum;
    }
    
    if (dice==1){
        sum=0;
    } 
    else{
       add();
    }

})