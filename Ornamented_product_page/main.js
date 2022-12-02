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

//change optional main image to the main optional image 

const optionalImage1=document.getElementById("option1"); 
const optionalImage2=document.getElementById("option2");
const optionalImage3=document.getElementById("option3");
const maI = document.getElementById("main"); 

optionalImage1.onclick = function (){
  maI.src= "https://www.dropbox.com/s/qm37ven6prod84l/labradorite.maI.png?dl=1";
 }

 optionalImage2.onclick = function (){
  maI.src= "https://www.dropbox.com/s/wd61ay6lwfhmb6h/tiger.maI.png?dl=1";
 }

 optionalImage3.onclick = function (){
  maI.src= "https://www.dropbox.com/s/6pijdj8ir1qdgnk/lapis.maI.png?dl=1";
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

const bookOrnament ={
  lapis:{
    price:'D'
  },
  tiger:{
    price:'E'
  },
  labradorite:{
    price:'F'
  }
};



//linking 'select ornament' options with images and price

const ornamentSelection= document.getElementById("book_ornament");
const sizeSelection=document.getElementById("book_size");
const itemAmount= document.getElementById("actual_item_amount");
const sizeAmount= document.getElementById("actual_size_amount");
const totalAmount= document.getElementById("total_amount"); 
let ornamentPrice= '';
let sizePrice= '';


function ornament (event) {
switch (event.target.value){
  case "1":
 maI.src= "https://www.dropbox.com/s/qm37ven6prod84l/labradorite.maI.png?dl=1";
 ornamentPrice=bookOrnament.labradorite.price;
 break;

  case "2":
  maI.src= "https://www.dropbox.com/s/wd61ay6lwfhmb6h/tiger.maI.png?dl=1";
  ornamentPrice=bookOrnament.tiger.price;
  break;

  case "3":
    maI.src= "https://www.dropbox.com/s/6pijdj8ir1qdgnk/lapis.maI.png?dl=1";
    ornamentPrice=bookOrnament.lapis.price;
    break;

  default:
    return itemAmount.innerHTML= "";
  break; 
 };

 const itemTotal = (ornamentPrice) =>{
  return itemAmount.innerHTML=`${ornamentPrice}`};

  itemTotal(ornamentPrice);

if(sizePrice && ornamentPrice){
  return total_amount.innerHTML=`${ornamentPrice}${sizePrice}H`;
 };
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

if(sizePrice && ornamentPrice){
  return total_amount.innerHTML=`${ornamentPrice}${sizePrice}H`;
} else if(event.target.value === ""){ return total_amount.innerHTML="H"};


};

ornamentSelection.addEventListener('change', ornament);
sizeSelection.addEventListener('change', size);