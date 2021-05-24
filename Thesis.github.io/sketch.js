var text0;
var text1;
var text2;
var text3;
var text4;
var text5;


var popup1;
var popup2;
var popup3;

let myDiv;

let button;
let button1;
let button2;

var canvas;


function preload() {

  text0 = loadStrings('text0.txt');
  text1 = loadStrings('text1.txt');
  text2 = loadStrings('text2.txt');
  text3 = loadStrings('text3.txt');
  text4 = loadStrings('text4.txt');
  text5 = loadStrings('text.txt');

  popup1 = loadStrings('popup1.txt');
  popup2 = loadStrings('popup2.txt')
  popup3 = loadStrings('popup3.txt')

  // font = loadFont('SuperMarioBros.otf');

}
function setup() {

  //////CANVAS SIZE//////
  createCanvas(windowWidth, windowHeight);
// canvas.position (300,300);
// background(0);


  // createCanvas(700, 700);




//////////BUTTON//////////

button = createButton('Button');
button.position(5, 5);
button.mousePressed(pop1);
button.style('font-family', 'courier')
button.style('font-size', '33px')
button.style('background-color', color(255,255,255))
button.style ('color', color(0,0,0));
button.style ('marginRight', '100px');
button.style ('text-align', 'justify');


button1 = createButton('Button 1');
button1.position(155, 5);
button1.mousePressed(pop2);
button1.style('font-family', 'courier')
button1.style('font-size', '33px')
button1.style('background-color', color(255,255,255))
button1.style ('color', color(0,0,0));
button1.style ('marginRight', '100px');
button1.style ('text-align', 'justify');
// button1.mousePressed(changeBG);

button2 = createButton('Button 2');
button2.position(350, 5);
button2.mousePressed(pop3);
button2.style('font-family', 'courier')
button2.style('font-size', '33px')
button2.style('background-color', color(255,255,255))
button2.style ('color', color(0,0,0));
button2.style ('marginRight', '100px');
button2.style ('text-align', 'justify');
// button2.mousePressed(changeBG);


//MAIN TEXT////
  var main = createDiv(text0);
  main.position(350,500)

  main.style('font-family', 'courier')
  main.style('font-size', '33px')
  // main.style('background-color', color(0,30,255))
  main.style ('color', color(0,0,0));
  main.style ('marginRight', '100px');
  // span.style ('margin', "100px 100px 100px 100px");

  main.style ('text-align', 'justify');

}

function pop1() {
  // let val = random(255);
  // background(val);

  var pop1 = createDiv(popup1);
  pop1.position(350,350)

  pop1.style('font-family', 'courier')
  pop1.style('font-size', '33px')
  pop1.style('background-color', color(255,255,255))
  pop1.style ('color', color(0,0,0));
  pop1.style ('marginRight', '100px');
  pop1.style ('text-align', 'justify');
}

function pop2() {
  // let val = random(255);
  // background(val);

  var pop2 = createDiv(popup2);
  pop2.position(350,700)

  pop2.style('font-family', 'courier')
  pop2.style('font-size', '33px')
  pop2.style('background-color', color(255,255,255))
  pop2.style ('color', color(0,0,0));
  pop2.style ('marginRight', '100px');
  pop2.style ('text-align', 'justify');
}

function pop3() {
  // let val = random(255);
  // background(val);

  var pop3 = createDiv(popup3);
  pop3.position(650,1000)

  pop3.style('font-family', 'courier')
  pop3.style('font-size', '33px')
  pop3.style('background-color', color(255,255,255))
  pop3.style ('color', color(0,0,0));
  pop3.style ('marginRight', '100px');
  pop3.style ('text-align', 'justify');
}

function mousePressed(){

//////////
var randomText = [];
randomText [1]= text1;
randomText [2]= text2;
randomText [3]= text3;
randomText [4]= text4;
randomText [5]= text5;

var rs = random(randomText);


////////COLOR VARIABLES
let colors = [color(77,238,234, alpha),
              color(116,238,21, alpha),
              color(255,231,0, alpha),
              color(240,0,255, alpha),



              color(0,30,255, alpha)];
//////////
//////////

for (var i = 0; i< 1; i+= 1){


  var span =createDiv(rs);

  span.style('font-family', 'courier')
  span.style('font-size', '20px')
  // span.style('background-color', color(0,30,255))
  // span.style ('marginRight', random(2000));
  span.style ('margin', "100px 10px 20px 30px");

  // span.style ('color', color(0,0,0));

////RANDOM COLORS///////
  span.style ('color', colors[floor(random(colors.length))]);

  // span.style('background-color', colors[floor(random(colors.length))])



  // var span =createDiv(randomText[i]);
  // span.style('color','#F55D3E');
  var pX = random(windowWidth);
  var pY = random(windowHeight);
  span.position (pX,pY);
}

}
