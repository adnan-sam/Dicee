//For Person-1
var randomnumber1=Math.floor(Math.random()*6)+1; //Random number between 1-6
var randomdiceimg="images/dice"+randomnumber1+".png"; //For generating random dice image
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomdiceimg);

//For Person-2
var randomnumber2=Math.floor(Math.random()*6)+1; //Random number between 1-6
var randomdiceimg2="images/dice"+randomnumber2+".png"; //For generating random dice image
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomdiceimg2);

//For Player-1 to win
if(randomnumber1>randomnumber2)
document.querySelector("h1").innerHTML="🚩Person 1 Wins!!";
else if(randomnumber2>randomnumber1)
document.querySelector("h1").innerHTML="Person 2 Wins!!🚩";
else
document.querySelector("h1").innerHTML="Draw!!";