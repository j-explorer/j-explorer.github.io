
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
const optionalImage1=document.getElementById("other_option1");
const maI = document.getElementById("main"); 

optionalImage1.onclick = function (){
  maI.src= "https://www.dropbox.com/s/dlck7w2hz222l3l/dragon.new2.png?dl=1";
  maI.style.height= "540px";
  maI.style.width= "";
  maI.style.marginLeft= "7%";
  maI.style.marginTop= "0%";
 }

 const optionalImage2=document.getElementById("other_option2");

 optionalImage2.onclick = function (){
  maI.src= "https://www.dropbox.com/s/08qukbvg9p8u9ts/tree.new2.png?dl=1";
  maI.style.height= "540px";
  maI.style.width= "";
  maI.style.marginLeft= "7%";
  maI.style.marginTop= "0%";
 }

 const optionalImage3=document.getElementById("other_option3");

 optionalImage3.onclick = function (){
  maI.src= "https://www.dropbox.com/s/qxp9lutdapkv29d/patterned.new2.png?dl=1";
  maI.style.height= "540px";
  maI.style.width= "";
  maI.style.marginLeft= "7%";
  maI.style.marginTop= "0%";
 }

 const optionalImage4=document.getElementById("other_option4");

 optionalImage4.onclick = function (){
  maI.src= "https://www.dropbox.com/s/vo2h2ux0twcvnba/hex.new.png?dl=1";
  maI.style.height= "440px";
  maI.style.width= "541px";
  maI.style.marginLeft= "0%";
  maI.style.marginTop= "9%";
 }

 //select options as objects

 const bookSize = {
  'Lorem X"': {
    price:'A'
  },
  'Lorem Y"': {
    price:'B'
  },
  'Lorem Z"': {
    price:'C'
  }
};

const bookPattern = {
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

