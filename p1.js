var scores,roundScore, activePlayer, dice, gamePlaying;
init();

document.querySelector(".btn-roll").addEventListener("click",function(){
    
    if(gamePlaying){

    //1.random number.
    var dice = Math.floor(Math.random()*6+1);

    //2.display the number
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";

    //3.show the result if the number isn't 1..
      
    if (dice !== 1){
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    }
    else{
        nextPlayer();
    }
    }
    

});

document.querySelector(".btn-hold").addEventListener("click",function(){
    if(gamePlaying){

    //1.add current score to global score
    scores[activePlayer] += roundScore;

    //2.update the UI
    document.querySelector("#score-"+ activePlayer).textContent=scores[activePlayer];
    
    //3.check if anyone wins
    if(scores[activePlayer] >= 30){
        document.querySelector("#name-"+ activePlayer).textContent = "WINNER!";

        document.querySelector(".dice").style.display = "none";

        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

        gamePlaying = false;
    
    }
    else{
        //4.next player
        nextPlayer();
    }
    }
    
});

document.querySelector(".btn-new").addEventListener("click",init);

function nextPlayer(){

    // document.querySelector("#score-"+ activePlayer).textContent=roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
};

function init(){

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.querySelector(".dice").style.display = "none";
    
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";

    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");

}