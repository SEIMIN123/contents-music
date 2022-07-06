const chad = document.querySelector('.chad')
const pic = document.querySelector('.pic');
const chadText = chad.children;
const hand = pic.children;
console.log(hand);


chad.addEventListener('click', function () {
  let page = '../index.html';
  location.href = page;
});

let smith = [ 
  {transform: 'rotateY(-180deg)'},
  {transform: 'rotateY(180deg)'},
  {transform: 'rotateY(-180deg)'}
  
];

let smithT = {
  duration: 20000,
  iterations: Infinity
};
chad.animate(smith, smithT);

//-------------------------------------

let move = [ 
  {transform: 'translateX(-15vw)'},
  {transform: 'translateX(20vw)'},
  {transform: 'translateX(-15vw)'}
  
];

let moving = {
  duration: 5000,
  iterations: Infinity
};
hand[0].animate(move, moving);