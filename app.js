let root = document.querySelector("#root");


/* Create nav element */

const bling = document.createElement('nav');
bling.textContent = "BLING!";
bling.style.cssText = "text-align:center; font-weight: bold ;text-shadow: 2px 1px #FF6347; font-size: 1.2rem;";
root.appendChild(bling);


/* Create div element for the contents */

const divMain = document.createElement('div');
divMain.style.cssText = "display:flex; flex-direction: column ";
root.appendChild(divMain);

const pOne = document.createElement('p');
pOne.textContent = "Sizzle your life";
divMain.appendChild(pOne);


const hOne = document.createElement('h2');
hOne.textContent = "Make a Card";
divMain.appendChild(hOne);


const divOne = document.createElement('div');
divOne.style.cssText = "display: flex;";
divMain.appendChild(divOne);


/* adding set of spans  for div one*/

const polaroid = document.createElement('span');
polaroid.textContent = "Polaroid";
const tv = document.createElement('span');
tv.textContent = "TV";
const traitor = document.createElement('span');
traitor.textContent = "Traitor";
const fallGuy = document.createElement('span');
fallGuy.textContent = "Fall Guy";
const radio = document.createElement('span');
radio.textContent = "Radio";

divOne.appendChild(polaroid);
divOne.appendChild(tv);
divOne.appendChild(traitor);
divOne.appendChild(fallGuy);
divOne.appendChild(radio);



/* div two */


const divTwo = document.createElement('div');
divTwo.style.cssText = "display:flex;";
divMain.appendChild(divTwo);

const inp = document.createElement("Input");
inp.setAttribute("type","text");
inp.setAttribute("value","Name Your Bling!");
divTwo.appendChild(inp);


const selector = document.createElement("Select");
selector.setAttribute("id","sel");
divTwo.appendChild(selector);


/* some set of color names and hex values for reference */

/* 
Snow - #FFFAFA
AliceBlue - #F0F8FF
Aqua - #00FFFF
Aquamarine - #7FFFD4
CadetBlue - #5F9EA0
Chocolate - #D2691E
CornflowerBlue - #6495ED
DarkCyan - #008B8B
DarkOrange - #FF8C00
DodgerBlue - #1E90FF
Lavender - #E6E6FA
PaleGreen - #98FB98
*/

/* loop for options */


let color = {
    Snow : "#FFFAFA",
    AliceBlue :  "#F0F8FF",
    Aqua : "#00FFFF",
    Aquamarine :"#7FFFD4",
    CadetBlue : "#5F9EA0",
    Chocolate : "#D2691E",
    CornflowerBlue : "#6495ED",
    DarkCyan : "#008B8B",
    DarkOrange :"#FF8C00",
    DodgerBlue : "#1E90FF",
    Lavender : "#E6E6FA",
    PaleGreen : "#98FB98",
  };
  
  for (let col in color) {
    
    const opt = document.createElement("option");
    opt.setAttribute("value",color[col]);
    const nod = document.createTextNode(col);
    opt.appendChild(nod);
    selector.appendChild(opt);
}






