var randomNumber1= Math.floor(Math.random()*6)+1;
var randomdiceimage= "dice"+randomNumber1+".png";
var randiceimg= "images/"+randomdiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randiceimg);

var randomnum=Math.floor(Math.random()*6)+1;
var ranimg="images/"+"dice"+randomnum+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",ranimg);

if(randomNumber1>randomnum)
{
    var h1="🚩Player 1 wins!";
    var head1=document.querySelector("h1");
    head1.innerHTML=h1;
}
else if(randomNumber1<randomnum)
{
    var h2="Player2 wins!🚩";
    var head2=document.querySelector("h1");
    head2.innerHTML=h2;     
}
else
{
    var h3="Draw!!!";
    var head3=document.querySelector("h1");
    head3.innerHTML=h3;
}