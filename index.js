var randomnumber1 = Math.floor(Math.random() * 6);
var randomnumber2 = Math.floor(Math.random() * 6);
function randomimages1(){
var randomimage = [];
    randomimage[0] = "C:\\Users\\vinay\\Downloads\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice1.png";
    randomimage[1] = "C:\\Users\\vinay\\Downloads\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice2.png";
    randomimage[2] = "C:\\Users\\vinay\\Downloads\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice3.png";
    randomimage[3] = "C:\\Users\\vinay\\Downloads\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice4.png";
    randomimage[4] = "C:\\Users\\vinay\\Downloads\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice5.png";
    randomimage[5] = "C:\\Users\\vinay\\Downloads\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice6.png";


return randomimage[randomnumber1];
}
function randomimages2() {
    var randomimage = [];
    randomimage[0] = "C:\\Users\\vinay\\Downloads\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice1.png";
    randomimage[1] = "C:\\Users\\vinay\\Downloads\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice2.png";
    randomimage[2] = "C:\\Users\\vinay\\Downloads\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice3.png";
    randomimage[3] = "C:\\Users\\vinay\\Downloads\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice4.png";
    randomimage[4] = "C:\\Users\\vinay\\Downloads\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice5.png";
    randomimage[5] = "C:\\Users\\vinay\\Downloads\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice6.png";
    return randomimage[randomnumber2];
}
function images(){
    document.querySelector("img").setAttribute("src", randomimages1());
    document.querySelector(".img2").setAttribute("src", randomimages2());
}
function changingtext(){
    if(randomnumber1 > randomnumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins.";
    }
    else if(randomnumber1===randomnumber2){
        document.querySelector("h1").innerHTML = "Draw";
    }
    else{
        document.querySelector("h1").innerHTML = "Player 2 Wins.";
    }
}
