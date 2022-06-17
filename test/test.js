const MAX_BAR_HEIGHT = 18;

addBarSpans();

setInterval(() => {
  setRandomBars();
}, 200);

function setRandomBars(maxBarHeight) {
  const bars = document.getElementsByClassName('eq-bar');

  for (let i = 0; i < bars.length; i++) {

    let spans = bars[i].getElementsByTagName('span');
    let activeSpanCount = getActiveSpans(spans);
    let newHeight = getRandomHeight(MAX_BAR_HEIGHT);

    for (let j = 0; j < spans.length; j++) {

      if (newHeight > activeSpanCount) {
        spans[j].style.opacity = '1';
      } else if (j > newHeight) {
        spans[j].style.opacity = '0';
      }

      let upperSpan = MAX_BAR_HEIGHT - j;
      if (newHeight > MAX_BAR_HEIGHT - 5 && upperSpan < 5) {
        spans[j].style.opacity = '0.' + upperSpan;
      }
    }
  }
}

function getActiveSpans(spans) {
  let counter = 0;

  for (let i = 0; i < spans.length; i++) {
    if (spans[i].style.opacity > 0) counter++;
  }

  return counter;
}

function getRandomHeight(maxBarHeight) {
  return Math.round(Math.random() * (maxBarHeight - 1)) + 1;
}

function addBarSpans() {
  const bars = document.getElementsByClassName('eq-bar');

  let html = '';
  for (let i = 0; i < MAX_BAR_HEIGHT; i++) {
    html += '<span></span>';
  }

  for (let i = 0; i < bars.length; i++) {
    bars[i].innerHTML = html;
  }
}
//------------------------------------------------------

const box = document.querySelector('.box2');
box.addEventListener('click', function () {
  let page = './html/poster-1.html';
  location.href = page;
});

const pic1 = document.querySelector('.pic1');
const picA = pic1.children;

let move = [ 
  {transform: 'translateY(-8px)'},
  {transform: 'translateY(8px)'},
  {transform: 'translateY(-8px)'}
  
];

let moving = {
  duration: 750,
  iterations: Infinity
};

pic1.animate(move, moving);

pic1.addEventListener('click', function () {
  let page = './html/poster-4.html';
  location.href = page;
});

//-------------------------------------------------------

const pic2 = document.querySelector('.pic2');
const picB = pic2.children;

let moveA = [ 
  {transform: 'translateY(-8px)'},
  {transform: 'translateY(8px)'},
  {transform: 'translateY(-8px)'}
  
];

let movingA = {
  duration: 750,
  iterations: Infinity
};

pic2.animate(moveA, movingA);

pic2.addEventListener('click', function () {
  let page = './html/poster-5.html';
  location.href = page;
});

//--------------------------------------------------


const pic3 = document.querySelector('.pic3');
const picC = pic3.children;

let moveB = [ 
  {transform: 'translateY(-8px)'},
  {transform: 'translateY(8px)'},
  {transform: 'translateY(-8px)'}
  
];

let movingB = {
  duration: 750,
  iterations: Infinity
};

pic3.animate(moveB, movingB);

pic3.addEventListener('click', function () {
  let page = './html/poster-6.html';
  location.href = page;
});

//---------------------------------------------------------

const pic4 = document.querySelector('.pic4');
const picD = pic4.children;

let moveC = [ 
  {transform: 'translateY(-8px)'},
  {transform: 'translateY(8px)'},
  {transform: 'translateY(-8px)'}
  
];

let movingC = {
  duration: 750,
  iterations: Infinity
};

pic4.animate(moveC, movingC);

pic4.addEventListener('click', function () {
  let page = './html/poster-7.html';
  location.href = page;
});

//--------------------------------------------------------------

const pic5 = document.querySelector('.pic5');
const picE = pic5.children;

let moveD = [ 
  {transform: 'translateY(-8px)'},
  {transform: 'translateY(8px)'},
  {transform: 'translateY(-8px)'}
  
];

let movingD = {
  duration: 750,
  iterations: Infinity
};

pic5.animate(moveD, movingD);

pic5.addEventListener('click', function () {
  let page = './html/poster-8.html';
  location.href = page;
});

//----------------------------------------------------------

const pic6 = document.querySelector('.pic6');
const picF = pic6.children;

let moveE = [ 
  {transform: 'translateY(-8px)'},
  {transform: 'translateY(8px)'},
  {transform: 'translateY(-8px)'}
  
];

let movingE = {
  duration: 750,
  iterations: Infinity
};

pic6.animate(moveE, movingE);

pic6.addEventListener('click', function () {
  let page = './html/poster-9.html';
  location.href = page;
});

//---------------------------------------------------------

const pic7 = document.querySelector('.pic7');
const picG = pic7.children;

let moveF = [ 
  {transform: 'translateY(-8px)'},
  {transform: 'translateY(8px)'},
  {transform: 'translateY(-8px)'}
  
];

let movingF = {
  duration: 750,
  iterations: Infinity
};

pic7.animate(moveF, movingF);

pic7.addEventListener('click', function () {
  let page = './html/poster-10.html';
  location.href = page;
});

//---------------------------------------------------------

const pic8 = document.querySelector('.pic8');
const picH = pic8.children;

let moveG = [ 
  {transform: 'translateY(-8px)'},
  {transform: 'translateY(8px)'},
  {transform: 'translateY(-8px)'}
  
];

let movingG = {
  duration: 750,
  iterations: Infinity
};

pic8.animate(moveG, movingG);

pic8.addEventListener('click', function () {
  let page = './html/poster-11.html';
  location.href = page;
});