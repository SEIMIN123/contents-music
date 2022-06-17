const root = document.getElementById('root')
root.addEventListener('click', function () {
  let page = '../index.html';
  location.href = page;
});

//--------------------------------------


const tri = document.querySelector('.tri');
const move = tri.children;

let move1 = [ 
  {transform: 'rotateY(-20deg)'},
  {transform: 'rotateY(30deg)'},
  {transform: 'rotateY(-20deg)'}
  
];

let moving1= {
  duration: 470,
  iterations: Infinity
};

tri.animate(move1, moving1);

