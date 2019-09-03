// Your code goes here
const head = document.querySelector('.logo-heading');
const image= document.querySelectorAll('img');
const links= document.querySelectorAll('.nav-link');

head.addEventListener('mouseover', () => {
    head.style.color = 'Brown';
    head.style.fontWeight = '900';
});

const el = document.querySelectorAll('img');

document.addEventListener('keydown', (e) => {
    console.log('keydown invoked and key code is '+e.keyCode);
    head.style.zoom = 3.0;
});


head.addEventListener('onwheel', () => {
    head.style.zoom = 3.0;
});

image.forEach(i => i.addEventListener("drag", (e) => {
    console.log('dragged');
    i.style.opacity = 0.5;
})
);

window.onload = (e) => console.log('window loaded' + e);

links.forEach(link => link.addEventListener('focus', () =>{
        link.style.fontWeight = '900';
        console.log(link);
    })
);

links.forEach(link => link.addEventListener('focusout', () =>{
    link.style.fontWeight = '100';
    console.log(link);
})
);


function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;

    console.log(log.textContent);
  }
  
  const input = document.querySelectorAll('p');
  input.forEach(text => text.addEventListener('select', logSelection));

  input.forEach(text => text.addEventListener('dblclick', () => text.style.fontWeight = '900'));

  window.addEventListener('resize', () => console.log('window resized') );
  window.addEventListener('scroll', () => console.log('page scrolled') );
  

  document.querySelectorAll('nav')
    .forEach(el => el.addEventListener('click', (e) => e.preventDefault()));

function showNesting(e) {
  console.log('the current target is ', e.currentTarget);
}
    
document.querySelectorAll('*')
.forEach(item => item.addEventListener('click', showNesting));

document.querySelectorAll('*')
.forEach(each => each.addEventListener('click', (e) => {
    e.stopPropagation();
}));