const root = document.getElementById('root')
root.addEventListener('click', function () {
  let page = '../html/poster-12.html';
  location.href = page;
});

//--------------------------------------


const tri = document.querySelector('.tri');
const move = tri.children;

let move1 = [ 
  {transform: 'rotateY(-15deg)'},
  {transform: 'rotateY(40deg)'},
  {transform: 'rotateY(-15deg)'}
  
];

let moving1= {
  duration: 470,
  iterations: Infinity
};

tri.animate(move1, moving1);

