// Typing Effect

const text = "Web Development & Programmer";

let index = 0;

function type(){

  document.querySelector(".typing").innerHTML =
  text.slice(0,index);

  index++;

  if(index > text.length){
    index = 0;
  }

}

setInterval(type,150);


// Digital Clock

function clock(){

  const now = new Date();

  document.getElementById("clock").innerHTML =
  now.toLocaleTimeString();

}

setInterval(clock,1000);


// Visitor Counter

let count = localStorage.getItem("visitorCount");

if(count == null){
  count = 0;
}

count++;

localStorage.setItem("visitorCount",count);

document.getElementById("count").innerHTML = count;


// Download CV

function downloadCV(){

  alert("CV Feature Coming Soon");

}


// MATRIX EFFECT

const canvas = document.getElementById("matrix");

const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const array = letters.split("");

const fontSize = 14;

const columns = canvas.width/fontSize;

const drops = [];

for(let i=0;i<columns;i++){
  drops[i]=1;
}

function draw(){

  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#00ff99";
  ctx.font = fontSize + "px monospace";

  for(let i=0;i<drops.length;i++){

    const text = array[Math.floor(Math.random()*array.length)];

    ctx.fillText(text,i*fontSize,drops[i]*fontSize);

    if(drops[i]*fontSize > canvas.height && Math.random()>0.975){
      drops[i]=0;
    }

    drops[i]++;

  }

}

setInterval(draw,35);