/* root styling */

let root = document.querySelector("#root");
root.style.fontFamily = 'Montserrat';
root.style.position = 'absolute';
root.style.height = '100vh';
root.style.width = '100vw';
root.style.backgroundColor = '#FFFAFA';
document.body.style.backgroundColor = "#FFFAFA";

/* Create nav element */

const bling = document.createElement('nav');
bling.textContent = "BLING!";

/* nav element styling */

bling.style.textAlign = 'center';
bling.style.fontWeight = 'bold';
bling.style.textShadow = '3px 3px 3px #FF9F33';
bling.style.fontSize = '2rem';
bling.style.padding = '2%';

/* append navbar - bling as root's child */

root.appendChild(bling);

//  styling - flex   

const flexStyle = {
    display: "flex",
    flexWrap: "wrap",
};

/* mainDiv is the parent div of both controlPanel and preview */

const mainDiv = document.createElement('div');

/* mainDiv element styling */

Object.assign(mainDiv.style,flexStyle);
mainDiv.style.justifyContent = 'space-between';
mainDiv.style.padding = '5%';
mainDiv.style.margin = '5%';

/* append mainDiv as root's child */

root.appendChild(mainDiv);

/* Create div element for the contents */

 const controlPanel = document.createElement('div');

/* controlPanel styling */

controlPanel.style.display = 'flex';
controlPanel.style.flexDirection = 'column';

/* append controlPanel as mainDiv's child */

mainDiv.appendChild(controlPanel);

/* Tag line */

const sizzle = document.createElement('p');

/* append sizzle as controlPanel's child */

controlPanel.appendChild(sizzle);

/* sizzle styling */

sizzle.textContent = "Sizzle your life";
sizzle.style.fontSize = '2.5rem';
const tagLine = document.createElement('h1');

/* append tagLine as controlPanel's child */

controlPanel.appendChild(tagLine);

/* tagLine styling */

tagLine.textContent = "Make a Card";
tagLine.style.fontSize = '4.5rem';
tagLine.style.fontWeight = '700';
tagLine.style.marginTop = '25px';

/* image button */

const imageButtonDiv = document.createElement('div');

/* append imageButtonDiv as controlPanel's child */

controlPanel.appendChild(imageButtonDiv);

/* imageButtonDiv styling */

Object.assign(imageButtonDiv.style,flexStyle);
imageButtonDiv.style.marginTop = '50px';

/* image button styling */

const imageButtonStyle = {
    padding: '15px',
    margin: '10px',
    borderRadius: '10px',
    color: 'black',
    border: '2px solid black',
    backgroundColor: 'transparent',
    boxShadow: '3px 4px 3px #000000',
    cursor: 'pointer',
};

/* image buttons -> polaroid, tv, traitor, fall Guy, radio */

const polaroid = document.createElement('button');
Object.assign(polaroid.style,imageButtonStyle);
polaroid.textContent = "Polaroid";
const tv = document.createElement('button');
tv.textContent = "TV";
Object.assign(tv.style,imageButtonStyle);
const traitor = document.createElement('button');
traitor.textContent = "Traitor";
Object.assign(traitor.style,imageButtonStyle);
const fallGuy = document.createElement('button');
fallGuy.textContent = "Fall Guy";
Object.assign(fallGuy.style,imageButtonStyle);
const radio = document.createElement('button');
radio.textContent = "Radio";
Object.assign(radio.style,imageButtonStyle);

/* append above buttons as imageButtonDiv's child */

imageButtonDiv.appendChild(polaroid);
imageButtonDiv.appendChild(tv);
imageButtonDiv.appendChild(traitor);
imageButtonDiv.appendChild(fallGuy);
imageButtonDiv.appendChild(radio);

/* inputDiv for text input, background color drop down , blob radio buttons*/

const inputDiv = document.createElement('div');

/* append inputDiv as controlPanel's child */

controlPanel.appendChild(inputDiv);

/* inputDiv styling */

Object.assign(inputDiv.style,flexStyle);
inputDiv.style.marginTop = '20px';

/* text input */

const textInput = document.createElement("Input");

/* text input styling */

textInput.setAttribute("type","text");
textInput.style.padding = '15px';
textInput.style.margin = '10px';
textInput.style.borderRadius = '10px';
textInput.style.color = 'white';
textInput.style.backgroundColor = 'black';
textInput.style.border = '2px solid black';
textInput.style.boxShadow = "3px 4px 3px #000000";
textInput.style.outline = 'none';
textInput.setAttribute("placeHolder","Name Your Bling!");

/* append textInput as inputDiv's child */

inputDiv.appendChild(textInput);

/* Drop down menu for background colors */

const bgSelector = document.createElement("Select");

/* background selector styling */

bgSelector.setAttribute("id","sel");
bgSelector.style.padding = '5px';
bgSelector.style.margin = '10px';
bgSelector.style.borderRadius = '10px';
bgSelector.style.color = 'white';
bgSelector.style.backgroundColor = 'black';
bgSelector.style.outline = 'none';
bgSelector.style.border = '2px solid black';
bgSelector.style.boxShadow = "3px 4px 3px #000000";

/* append bgSelector as inputDiv's child */

inputDiv.appendChild(bgSelector);

/* color contains all color names and values  */

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

/* loop for creating options with color names */

for (let col in color) {
    const opt = document.createElement("option");
    opt.setAttribute("value",color[col]);
    const nod = document.createTextNode(col);
    opt.appendChild(nod);
    bgSelector.appendChild(opt);
    }

/* function for changing background color based on color selection*/

const changeColor = (e) => {
root.style.backgroundColor = e.target.value;
document.body.style.backgroundColor = e.target.value;
}
bgSelector.onchange = changeColor;

/* radioDiv contains two radio buttons -> blob and nope */

const radioDiv = document.createElement("div");

/* append radioDiv as inputDiv's child */

inputDiv.appendChild(radioDiv);

/* radioDiv styling */

radioDiv.style.display = "flex";
radioDiv.style.justifyContent = 'space-between';
radioDiv.style.padding = '15px 25px 15px 25px';
radioDiv.style.margin = '10px';
radioDiv.style.borderRadius = '10px';
radioDiv.style.boxShadow = "3px 4px 3px #000000";
radioDiv.style.color = 'white';
radioDiv.style.backgroundColor = 'black';

/* blob radio button */

 const blob = document.createElement('input');
 blob.setAttribute("type","radio");
 blob.setAttribute("name","rad");
 blob.setAttribute("value","blob");

 /* append blob radio button as radioDiv's child */

 radioDiv.appendChild(blob);

 /* blobspan for blob text */

 const blobspan = document.createElement("span");
 blobspan.textContent = "Blob";
 blobspan.style.paddingRight = '10px';

  /* append blob span as radioDiv's child */

 radioDiv.appendChild(blobspan);

/* nope radio button */

 const nope = document.createElement('input');
 nope.setAttribute("type","radio");
 nope.setAttribute("name","rad");
 nope.setAttribute("value","nope");
 nope.checked = 'true';

 /* append nope radio button as radioDiv's child */

 radioDiv.appendChild(nope);

/* nopespan for nope text */

 const nopespan = document.createElement("span");
 nopespan.textContent = "Nope";

 /* append span as radioDiv's child */

 radioDiv.appendChild(nopespan);

/* add camera button icon */ 

 const camera = document.createElement("button");

 /* add camera button as controlPanel's child */

 controlPanel.appendChild(camera);

 /* camera styling */

 camera.style.backgroundImage = "url('./assets/images/camera.png')";
 camera.style.backgroundPosition = 'center';
 camera.style.width = '45px';
 camera.style.height = '45px';
 camera.style.padding = '15px';
 camera.style.cursor = 'pointer';
 camera.style.margin = '10px';
 camera.style.backgroundColor = 'transparent';
 camera.style.backgroundSize = '20px';
 camera.style.backgroundRepeat = 'no-repeat';
 camera.style.border = '2px solid black';
 camera.style.boxShadow = "3px 4px 3px #000000";
 camera.style.marginTop = '40px'
 camera.style.borderRadius = '5px';

 /* Preview Div for preview text and image */

const preview = document.createElement('div');

/* preview styling */

preview.style.display = "flex";
preview.style.flexDirection = "column";

/* add preview as mainDiv's child */

mainDiv.appendChild(preview);

/* preview Text */

const previewText = document.createElement('h1');
 previewText.style.fontSize = '3.5rem';
 previewText.style.fontWeight = 'bold';
 previewText.style.textShadow = "2px 2px 2px #000000";
 previewText.style.textAlign = 'center';

 /* add preview Text as preview's child */

 preview.appendChild(previewText);

/* function for adding preview text */

 textInput.addEventListener("keyup",(event) => {
    previewText.textContent = textInput.value;
  })

 /* div for blob and preview image */

 const previewImageDiv = document.createElement('div');

  /* add preview Text as preview's child */

 preview.appendChild(previewImageDiv);

 /* preview image div styling */

  previewImageDiv.style.margintop = '25px';
  const imgDiv = document.createElement('div');
  imgDiv.style.width = '250px';
  imgDiv.style.height = '250px';
  Object.assign(imgDiv.style,flexStyle);
  previewImageDiv.appendChild(imgDiv);

  /* function for displaying preview image */

const previewImage = document.createElement('img');

/* preview image styling */

previewImage.style.width = '150px';
previewImage.style.height = '150px';
previewImage.style.objectFit = 'contain';
previewImage.style.margin = '20%';
previewImage.style.display = 'none';
imgDiv.appendChild(previewImage);

/* buttonColor function changes clicked button's color */
let click = 0;
let prevImg = {};

const buttonList = [polaroid,tv,traitor,radio,fallGuy];
function buttonColor(buttonObj){
    for(let button of buttonList){
        if((button != buttonObj) || (click == 0)){
            button.style.backgroundColor = 'transparent';
            button.style.color = 'black';
        }
        else{
            button.style.backgroundColor = 'black';
            button.style.color = 'white';
        }
    }
}

/* on click image buttons function */

polaroid.addEventListener("click", (event) => {
    if(prevImg!= polaroid)
    {
        click = 0;
    }
    click = (click == 0)?1:0;
    if(click == 0){
        previewImage.style.display = 'none';
    }
    else{
    previewImage.style.display = 'block';
  
    previewImage.src = './assets/images/polaroid.png';
    prevImg = polaroid;
    }
    buttonColor(polaroid)
    
    
})
fallGuy.addEventListener("click", (event) => {
    if(prevImg!= fallGuy)
    {
        click = 0;
    }
    click = (click == 0)?1:0;
    if(click == 0){
        previewImage.style.display = 'none';
    }
    else{
    previewImage.style.display = 'block';
    previewImage.src = './assets/images/fall-guy-01.png';
    prevImg = fallGuy;
    }
    buttonColor(fallGuy);
    
})
radio.addEventListener("click", (event) => {
    if(prevImg!= radio)
    {
        click = 0;
    }
    click = (click == 0)?1:0;
    if(click == 0){
        previewImage.style.display = 'none';
    }
    else{
    previewImage.style.display = 'block';
    previewImage.src = './assets/images/radio-02.png';
    prevImg = radio;
    }
    buttonColor(radio);
    
})
traitor.addEventListener("click", (event)=>{
    if(prevImg!= traitor)
    {
        click = 0;
    }
    click = (click == 0)?1:0;
    if(click == 0){
        previewImage.style.display = 'none';
    }
    else{
    previewImage.style.display = 'block';
    previewImage.src = './assets/images/among-us.png';
    prevImg = traitor;
    }
    buttonColor(traitor);
    
})
tv.addEventListener("click", (event)=>{
    if(prevImg!= tv)
    {
        click = 0;
    }
    click = (click == 0)?1:0;
    if(click == 0){
        previewImage.style.display = 'none';
    }
    else{
    previewImage.style.display = 'block';
    previewImage.src = './assets/images/tv.png';
    prevImg = tv;
    }
    buttonColor(tv);
    
})

/* cardDiv - div which contains preview screenshot  cards */

const cardDiv = document.createElement('div');

/* append cardDiv as root's child */

root.append(cardDiv);

/* cardDiv styling */

cardDiv.style.display = 'flex';
cardDiv.style.padding = '5%';
cardDiv.style.flexWrap = 'wrap';
cardDiv.style.justifyContent = 'space-around';
cardDiv.style.margin = '5%';
cardDiv.style.display = 'none';


/* create image shots */


camera.addEventListener("click",(event=>{
    camera.style.backgroundColor = 'white';
    setInterval(() => {camera.style.backgroundColor = "transparent"},250);

    cardDiv.style.display = 'flex';
    const card = document.createElement('div');
    card.style.margin = '5px';
    card.style.marginTop = '15px';
    card.style.height = '400px';
    card.style.width = '300px';
    card.style.border = '2px solid black';
    card.style.boxShadow = "3px 4px 3px #000000";
    card.style.backgroundColor = root.style.backgroundColor;
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.justifyContent = 'center';

    /* add card as first childNode of carDiv */

    cardDiv.insertBefore(card, cardDiv.childNodes[0]);  

    /* add close button for preview screenshot cards */

    const close = document.createElement("button");
    card.appendChild(close);

    /* close button styling */

    close.style.backgroundImage = "url('./assets/images/icon_delete.png')";
    close.style.backgroundPosition = 'center';
    close.style.width = '50px';
    close.style.height = '50px';
    close.style.padding = '15px';
    close.style.margin = '10px';
    close.style.backgroundColor = 'transparent';
    close.style.border = 'none';
    close.style.backgroundSize = '40px';
    close.style.backgroundRepeat = 'no-repeat';
    close.style.float = 'left';

    /* add event listener for close button */

    close.addEventListener("click",(event) => {
        event.target.parentNode.remove();
        if(!cardDiv.hasChildNodes()){
            cardDiv.style.display = 'none';
        }
    })

    /* card text */

    const textCard = document.createElement('h1');

    /* card text styling */

    textCard.style.fontSize = '3.5rem';
    textCard.style.fontWeight = 'bold';
    textCard.style.textShadow = "2px 2px 2px #000000";
    textCard.style.margin = 'auto';
    textCard.textContent = previewText.textContent;
    card.appendChild(textCard);

    /* image card Div */

    const imgCardDiv = document.createElement('div');
    imgCardDiv.style.margin = 'auto';
    imgCardDiv.style.width = '100%';
    imgCardDiv.style.height = '250px';
    card.appendChild(imgCardDiv);
    imgCardDiv.style.backgroundImage = previewImageDiv.style.backgroundImage;
    imgCardDiv.style.backgroundPosition = 'center';
    imgCardDiv.style.backgroundSize = '250px';
    imgCardDiv.style.backgroundRepeat = 'no-repeat';

    /* preview image shot */

    const imgCard = document.createElement('img');
    imgCard.src = previewImage.src;
    imgCard.style.display = previewImage.style.display;
    imgCardDiv.display = 'block'
    imgCard.style.width = '150px';
    imgCard.style.height = '150px';
    imgCard.style.margin = '22%';
    imgCard.style.objectFit = 'contain';
    imgCardDiv.appendChild(imgCard);

}))

/* footer  */

const footer = document.createElement('footer');

/* FOOTER STYLING */

root.appendChild(footer);
Object.assign(footer.style,flexStyle);
footer.style.justifyContent= 'center';
footer.style.paddingBottom = '15px';
const footerStyle = {
    marginLeft: '10px',
    color: 'black',
    fontWeight: '550',
    textDecoration: 'none',
};

/* footer links */


const pheart = document.createElement('p');
pheart.textContent = "🖤 Credits: ";
pheart.style.fontWeight = '550';
footer.appendChild(pheart);



const aPolaroid = document.createElement('a');
const aFallGuy = document.createElement('a');
const aTv = document.createElement('a');
const aRadio = document.createElement('a');
const aTraitor = document.createElement('a');

aPolaroid.textContent = 'Polaroid';
aFallGuy.textContent = 'Fall Guy';
aTv.textContent = 'TV';
aRadio.textContent = 'Radio';
aTraitor.textContent = 'Traitor';

 const footerLinks = [aPolaroid,aFallGuy,aTv,aRadio,aTraitor]
 for(let link of footerLinks){
    Object.assign(link.style,footerStyle);
    link.href='#';
    footer.appendChild(link);
    link.addEventListener('mouseenter',()=>{
        link.style.borderBottom = '2px solid black'
    });
    link.addEventListener('mouseleave',() => {
        link.style.border = 'none'
    });
}

/* blob nope function */

const blobChange = () => {
    if(blob.checked){
        previewImageDiv.style.backgroundImage = "url('./assets/images/blob.png')";
        previewImageDiv.style.backgroundSize = '250px';
        previewImageDiv.style.backgroundRepeat = 'no-repeat';
        previewImage.style.width = '150px';
        previewImage.style.height = '150px';
        previewImage.style.margin = '20%';
    }
}
blob.onchange = blobChange;
const nopeDefault = () => {
    if(nope.checked){
        previewImageDiv.style.backgroundImage = 'none';
        previewImage.style.width = '150px';
        previewImage.style.height = '150px';
        previewImage.style.margin = 'auto';
        previewImage.style.objectFit = 'contain';
     }

}
nope.onchange = nopeDefault;
/* for ipad view */
const ipadView = window.matchMedia("(max-width: 768px)")
function ipadViewChange(){
    previewText.style.fontSize = '2.5rem';
    previewText.style.fontWeight = '700';
    previewText.style.textShadow = "2px 3px 2px #000000";
  }
 ipadView.addEventListener('change',ipadViewChange);
 const mobileView = window.matchMedia("(max-width: 480px)")
 function mobileViewChange(){
      if(mobileView.matches){
      preview.style.margin = 'auto';
      preview.style.marginTop = '40px';
      previewText.style.fontSize = '2.5rem';
      previewText.style.fontWeight = '700';
      previewText.style.textShadow = "2px 3px 2px #000000";
      }
    }
 mobileView.addEventListener('change',mobileViewChange);