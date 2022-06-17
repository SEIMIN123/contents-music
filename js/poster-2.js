const root = document.getElementById('root')
root.addEventListener('click', function () {
  let page = '../html/poster-3.html';
  location.href = page;
});


//--------------------------------------


const box = document.querySelector('.box');
const move = box.children;

let move1 = [ 
  {transform: 'translateY(-20px)'},
  {transform: 'translateY(10px)'},
  {transform: 'translateY(-5px)'}
  
];

let moving1= {
  duration: 470,
  iterations: Infinity
};

box.animate(move1, moving1);

