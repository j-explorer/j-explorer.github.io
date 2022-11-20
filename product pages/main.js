
/* does not work to change opacity

const optionalImages= document.getElementsByClassName("optional_images");

for(let i=0; i<optionalImages.length; i++){
  optionalImages[i].addEventListener = ('mouseover', opacity);

function opacity(event) {
 this.style.opacity= "1";
}
}*/


/*functions works to change opacity
const opI=document.getElementsByClassName("optional_images");

for(let i=0; i<opI.length; i++){
 opI[i].onmouseover = function (){
  this.style.opacity= "1";
 }
 opI[i].onmouseout = function (){
  this.style.opacity= "";
 }
}*/

//combine above functions with ability to click optional image and enlarge it to main image.

const optionalImage=document.getElementsByClassName("optional_images");

for(let i=0; i<optionalImage.length; i++){
 optionalImage[i].onmouseover = function (){
  this.style.opacity= "1";
 }
 optionalImage[i].onmouseout = function (){
  this.style.opacity= "";
 }

}
const optionalImage1=document.getElementById("option1");
const maI = document.getElementById("main"); 

optionalImage1.onclick = function (){
  maI.src= "https://www.dropbox.com/s/dlck7w2hz222l3l/dragon.new2.png?dl=1";
  maI.style.height= "540px";
  maI.style.width= "";
  maI.style.marginLeft= "7%";
  maI.style.marginTop= "0%";
 }

 const optionalImage2=document.getElementById("option2");

 optionalImage2.onclick = function (){
  maI.src= "https://www.dropbox.com/s/08qukbvg9p8u9ts/tree.new2.png?dl=1";
  maI.style.height= "540px";
  maI.style.width= "";
  maI.style.marginLeft= "7%";
  maI.style.marginTop= "0%";
 }

 const optionalImage3=document.getElementById("option3");

 optionalImage3.onclick = function (){
  maI.src= "https://www.dropbox.com/s/qxp9lutdapkv29d/patterned.new2.png?dl=1";
  maI.style.height= "540px";
  maI.style.width= "";
  maI.style.marginLeft= "7%";
  maI.style.marginTop= "0%";
 }

 const optionalImage4=document.getElementById("option4");

 optionalImage4.onclick = function (){
  maI.src= "https://www.dropbox.com/s/vo2h2ux0twcvnba/hex.new.png?dl=1";
  maI.style.height= "440px";
  maI.style.width= "541px";
  maI.style.marginLeft= "0%";
  maI.style.marginTop= "9%";
 }

 //select options as objects

 const bookSize = {
  LoremX: {
    price:'A'
  },
  Lorem : {
    price:'B'
  },
  LoremZ: {
    price:'C'
  }
};

const bookPattern ={
  hex:{
    price:'D'
  },
  dragon:{
    price:'E'
  },
  tree:{
    price:'F'
  },
  patterned:{
    price:'G'
  }
}



//linking select options with images and price

const patternSelection= document.getElementById("book_pattern");
const sizeSelection=document.getElementById("book_size");
const itemAmount= document.getElementById("actual_item_amount");
let pattern='hi';


function eventHandler (event) {
 switch (event.target.value){
  case "1":
 maI.src= "https://www.dropbox.com/s/vo2h2ux0twcvnba/hex.new.png?dl=1";
 maI.style.height= "440px";
 maI.style.width= "541px";
 maI.style.marginLeft= "0%";
 maI.style.marginTop= "9%";
 pattern=bookPattern.hex.price;
 break;

  case "2":
  maI.src= "https://www.dropbox.com/s/dlck7w2hz222l3l/dragon.new2.png?dl=1";
  maI.style.height= "540px";
  maI.style.width= "";
  maI.style.marginLeft= "7%";
  maI.style.marginTop= "0%";
  break;

  case "3":
    maI.src= "https://www.dropbox.com/s/08qukbvg9p8u9ts/tree.new2.png?dl=1";
    maI.style.height= "540px";
    maI.style.width= "";
    maI.style.marginLeft= "7%";
    maI.style.marginTop= "0%";
    break;

  case "4":
  maI.src= "https://www.dropbox.com/s/qxp9lutdapkv29d/patterned.new2.png?dl=1";
  maI.style.height= "540px";
  maI.style.width= "";
  maI.style.marginLeft= "7%";
  maI.style.marginTop= "0%"; 
  break;
 } 

};

patternSelection.addEventListener('change',eventHandler)
//linking select options with price

/*sizeSelection.onchange=function(event) {
  switch (event.target.value){
   case "5":
    let size=bookSize.LoremX.price;
    break;
  }
}*/
//function to add the values together


const itemTotal = (pattern) =>{
  return itemAmount.innerHTML=`${pattern}`;
};

itemTotal(pattern);

//transferring data to delivery and payment pages
//localStorage.setItem("productImage","https://www.dropbox.com/s/vo2h2ux0twcvnba/hex.new.png?dl=1");

