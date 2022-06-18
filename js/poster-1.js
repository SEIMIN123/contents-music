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
  {transform: 'rotate(-10deg)'},
  {transform: 'rotate(10deg)'},
  {transform: 'rotate(-10deg)'}
  
];

let moving1= {
  duration: 940,
  iterations: Infinity
};

cir.animate(move1, moving1);

