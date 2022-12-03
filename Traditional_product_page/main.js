//change opacity of the optional images when hovered

const optionalImage=document.getElementsByClassName("optional_images");

for(let i=0; i<optionalImage.length; i++){
 optionalImage[i].onmouseover = function (){
  this.style.opacity= "1";
 }
 optionalImage[i].onmouseout = function (){
  this.style.opacity= "";
 }

}

//change optional image to the main image 

const optionalImage1=document.getElementById("option1");
const optionalImage2=document.getElementById("option2");
const optionalImage3=document.getElementById("option3");
const optionalImage4=document.getElementById("option4");
const maI = document.getElementById("main"); 

optionalImage1.onclick = function (){
  maI.src= "https://www.dropbox.com/s/dlck7w2hz222l3l/dragon.new2.png?dl=1";
  maI.style.marginTop= "0%";
 }

 optionalImage2.onclick = function (){
  maI.src= "https://www.dropbox.com/s/08qukbvg9p8u9ts/tree.new2.png?dl=1";
  maI.style.marginTop= "0%";
 }

 optionalImage3.onclick = function (){
  maI.src= "https://www.dropbox.com/s/qxp9lutdapkv29d/patterned.new2.png?dl=1";
  maI.style.marginTop= "0%";
 }

 optionalImage4.onclick = function (){
  maI.src= "https://www.dropbox.com/s/vo2h2ux0twcvnba/hex.new.png?dl=1";
 }
 

 //select options as objects

 const bookSize = {
  LoremX: {
    price:'A'
  },
  LoremY: {
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
};



//linking 'select book pattern' options with images and price

const patternSelection= document.getElementById("book_pattern");
const sizeSelection=document.getElementById("book_size");
const itemAmount= document.getElementById("actual_item_amount");
const sizeAmount= document.getElementById("actual_size_amount");
const totalAmount= document.getElementById("total_amount"); 
let patternPrice= '';
let sizePrice= '';

const select1=document.getElementById('value1');
const select2=document.getElementById('value2');

function pattern (event) {
switch (event.target.value){
  case "1":
 maI.src= "https://www.dropbox.com/s/vo2h2ux0twcvnba/hex.new.png?dl=1";
 patternPrice = bookPattern.hex.price;
 break;

   case "2":
  maI.src= "https://www.dropbox.com/s/dlck7w2hz222l3l/dragon.new2.png?dl=1";
  maI.style.marginTop= "0%";
  patternPrice = bookPattern.dragon.price;
  break;


  case "3":
  maI.src= "https://www.dropbox.com/s/08qukbvg9p8u9ts/tree.new2.png?dl=1";
  maI.style.marginTop= "0%";
  patternPrice = bookPattern.tree.price;
  break;

  case "4":
  maI.src= "https://www.dropbox.com/s/qxp9lutdapkv29d/patterned.new2.png?dl=1";
  maI.style.marginTop= "0%"; 
  patternPrice = bookPattern.patterned.price;
  break;

 default:
      return itemAmount.innerHTML= "";
    break; 
 };

  const itemTotal = (patternPrice) =>{
  return itemAmount.innerHTML=`${patternPrice}`};


  itemTotal(patternPrice);
};

 

//linking 'select book size' options with price

function size (event) {
switch (event.target.value){
    case "5":
    sizePrice= bookSize.LoremX.price;
    break;

    case "6":
    sizePrice= bookSize.LoremY.price;
    break;

    case "7":
    sizePrice= bookSize.LoremZ.price;
    break;

    default:
      return sizeAmount.innerHTML= "";
    break;
  }

  const itemTotal = (sizePrice) =>{
    return sizeAmount.innerHTML=`${sizePrice}`
  };
  
  itemTotal(sizePrice);

  if(sizePrice && patternPrice){
    return total_amount.innerHTML=`${patternPrice}${sizePrice}H`;
  } else if(event.target.value === ""){ return total_amount.innerHTML="H"};


};

patternSelection.addEventListener('change', pattern);
sizeSelection.addEventListener('change', size);


