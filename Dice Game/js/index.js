var newd1 = Math.floor((Math.random() * 6) + 1);
var newd2 = Math.floor((Math.random() * 6) + 1);

if(newd1 == 1){
    document.getElementById("d1").src = "dice images/1.png";
}
else if(newd1 == 2){
    document.getElementById("d1").src = "dice images/2.png";
}
else if(newd1 == 3){
    document.getElementById("d1").src = "dice images/3.png";
}
else if(newd1 == 4){
    document.getElementById("d1").src = "dice images/4.png";
}
else if(newd1 == 5){
    document.getElementById("d1").src = "dice images/5.png";
}
else if(newd1 == 6){
    document.getElementById("d1").src = "dice images/6.png";
}

if(newd2 == 1){
    document.getElementById("d2").src = "dice images/1.png";
}
else if(newd2 == 2){
    document.getElementById("d2").src = "dice images/2.png";
}
else if(newd2 == 3){
    document.getElementById("d2").src = "dice images/3.png";
}
else if(newd2 == 4){
    document.getElementById("d2").src = "dice images/4.png";
}
else if(newd2 == 5){
    document.getElementById("d2").src = "dice images/5.png";
}
else if(newd2 == 6){
    document.getElementById("d2").src = "dice images/6.png";
}

if(newd1 > newd2){
    document.getElementById("title").innerHTML = "Congrats Player 1, You Win!";
}
else if(newd1 < newd2){
    document.getElementById("title").innerHTML = "Congrats Player 2, You Win!";
}
else{
    document.getElementById("title").innerHTML = "Draw!";
}