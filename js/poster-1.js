const root = document.getElementById('root')
root.addEventListener('click', function () {
  let page = '../html/poster-2.html';
  location.href = page;
});

//--------------------------------------


const cir = document.querySelector('.cir');
console.log(cir);
const move = cir.children;

let move1 = [ 
  {transform: 'rotate(-7deg)'},
  {transform: 'rotate(5deg)'},
  {transform: 'rotate(-7deg)'}
  
];

let moving1= {
  duration: 930,
  iterations: Infinity
};

cir.animate(move1, moving1);

