var randomNumber1 = Math.random();
randomNumber1=randomNumber1*6;
randomNumber1= Math.round(randomNumber1)+1;
console.log(randomNumber1);

if(randomNumber1==1){
   document.querySelector(".dice1 img").setAttribute("src", "images/dice1.png");
}
else if(randomNumber1==2){
    document.querySelector(".dice1 img").setAttribute("src", "images/dice2.png");
 }
 else if(randomNumber1==3){
    document.querySelector(".dice1 img").setAttribute("src", "images/dice3.png");
 }
 else if(randomNumber1==4){
    document.querySelector(".dice1 img").setAttribute("src", "images/dice4.png");
 }
 else if(randomNumber1==5){
    document.querySelector(".dice1 img").setAttribute("src", "images/dice5.png");
 }

 var randomNumber2 = Math.random();
randomNumber2=randomNumber2*6;
randomNumber2= Math.round(randomNumber2)+1;
console.log(randomNumber2);

if(randomNumber2==1){
   document.querySelector(".dice2 img").setAttribute("src", "images/dice1.png");
}
else if(randomNumber2==2){
    document.querySelector(".dice2 img").setAttribute("src", "images/dice2.png");
 }
 else if(randomNumber2==3){
    document.querySelector(".dice2 img").setAttribute("src", "images/dice3.png");
 }
 else if(randomNumber2==4){
    document.querySelector(".dice2 img").setAttribute("src", "images/dice4.png");
 }
 else if(randomNumber2==5){
    document.querySelector(".dice2 img").setAttribute("src", "images/dice5.png");
 }

 if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerText= "Player 2 Win 🚩";
 }
 else if(randomNumber2<randomNumber1){
    document.querySelector("h1").innerText= "🚩 Player 1 Win";
 }
 else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerText= "Draw !";
 }