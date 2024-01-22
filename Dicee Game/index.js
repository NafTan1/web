var player1=Math.floor(Math.random()*6)+1;
var player2=Math.floor(Math.random()*6)+1;

var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];

//changing the image of the dice
img1.setAttribute("src","images/dice"+player1+".png");
img2.setAttribute("src","images/dice"+player2+".png");

//if case of player 1 wins
if (player1>player2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";    
}
//if case of player 2 wins
else if (player2>player1){
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
//if case of draw
else{
    document.querySelector("h1").innerHTML="Draw";
}