

let toggler= document.getElementById("toggler");
let mobile_nav =document.getElementById("mobile-nav");

toggler.addEventListener('click', ()=> {

mobile_nav.classList.toggle("left-100");
mobile_nav.classList.toggle("left-0");




});



function showText(element) {

 let selector= element.getAttribute("target");
 let target= document.querySelector(selector);
 
 target.classList.toggle("max-height-0");
 target.classList.toggle("max-height-300");
}

 let titles =['Nintendo Switch 2 In Stock Now!', 'Frasers Plus 2 Pay In 3 Interest free payments!','Borderlands 4 OUT NOW']
 let banner= document.getElementById("banner");

let index=0;
setInterval(()=> {


banner.textContent=titles[index];
index++;
if(index>= titles.length) {
    index=0;
}

},3000)


let left_arrow = document.getElementById("left-arrow");
let right_arrow = document.getElementById("right-arrow");
let slider= document.getElementById("slider");
let slides =document.querySelectorAll(".slide");

 let counter=0;
 let maxSteps=1;
 let movement=-25;


function sliderConfig() {
    if (window.innerWidth <= 800) {
        maxSteps=2;
        movement=-55;
       
   } else {
        maxSteps=1;
        movement=-30;
   }

}
document.addEventListener('DOMContentLoaded',sliderConfig);
window.addEventListener('resize',sliderConfig);

left_arrow.addEventListener('click', ()=> {
     counter--;  
  
     if(counter<0) {
        counter=maxSteps;
        
     }
     updateSliderPosition();
})

right_arrow.addEventListener('click', ()=> {
    counter++;  
   
    if(counter> maxSteps) {
        counter=0;
    } 
    updateSliderPosition();
})

function updateSliderPosition(){

    slider.style.transform= 'translateX(' + counter * movement + '%)';
     
    
}

const header = document.querySelector('header');

function load() {
    items = JSON.parse(localStorage.getItem('items'));
    if(!items) {
    items= [];
    }
}

function render_basket () {
 
    let container= document.querySelector('.game-i');
    container.innerHTML = '';
    if(items.length>0){
    items.forEach( (item)=> {


let game_info= document.createElement('div');
 

container.appendChild(game_info);
game_info.classList.add('d-flex')
let game_price=document.createElement('p');

let game_text=document.createElement('p');
game_info.style.gap= 5 +'px';
game_text.textContent=item.name;
game_price.textContent=  ` £${item.price * item.qty} ` ;
game_info.appendChild(game_text);
game_info.appendChild(game_price);
});
}

else {
 let con= document.querySelector('.game-i');
 let emptyMessage= document.createElement('p');
 emptyMessage.textContent="no items in the basket!"
 con.appendChild(emptyMessage);
}

  }

window.addEventListener('pageshow', load);
window.addEventListener('pageshow', render_basket);

document.addEventListener('DOMContentLoaded', load);
document.addEventListener('DOMContentLoaded', render_basket);

gamesList=[{name:'PS5 Limited Controller', img:'https://cdn.media.amplience.net/i/frasersdev/DUALSENSE_LE_ASTROBOT_2.0_BEAUTY_01_CROP_RGB?fmt=auto&upscale=false&w=451&h=451&sm=c&$h-ttl$'
, id:5, price:'45', qty:1},{name:'007 First Light', img:'https://cdn.media.amplience.net/i/frasersdev/007_first_light_1x1?fmt=auto&upscale=false&w=451&h=451&sm=c&$h-ttl$', id:1, price:'65', qty:1} 
,{name:'Super Mario', img:'https://cdn.media.amplience.net/i/frasersdev/super_mario_galaxy_1and2_1x1?fmt=auto&upscale=false&w=451&h=451&sm=c&$h-ttl$', id:6,  price:'70', qty:1}, ];

let gameText= document.querySelectorAll('.gameText');
let addButtons= document.querySelectorAll('.addButton');

gamesList.forEach((game,index)=> {
    if (gameText[index]) {
    gameText[index].innerText=game.name; 
    }

    if(addButtons[index]) {
        addButtons[index].setAttribute('id', game.id) 
    }
} );

addButtons.forEach((addButton)=> {

    addButton.addEventListener('click', ()=> {

        addToBasket(Number(addButton.getAttribute('id')));
    } )

} )


function addToBasket(id) {
  
    let gameToAdd= gamesList.find(game => game.id === id);
  
  let found= items.find(i => i.id === id);
  
  if(found) {
      found.qty++;
      render_basket();
  }
  else {
      items.push({ ...gameToAdd, qty: 1 });
      render_basket();
  }

  localStorage.setItem('items', JSON.stringify(items));
  alert(localStorage.getItem('items'));
  
  }
