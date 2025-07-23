// Create GUI
const gui = document.createElement('div');
gui.id = 'modifier-gui';
gui.innerHTML = `
  <h3>👾 Site Modifier</h3>
  <button id="btn-text">Change All Text</button>
  <button id="btn-img">Replace Images</button>
  <button id="btn-invert">Invert Colors</button>
`;
document.body.appendChild(gui);

// Make draggable
gui.style.position = 'fixed';
gui.style.top = '10px';
gui.style.left = '10px';
gui.style.background = 'rgba(0,0,0,0.8)';
gui.style.color = 'white';
gui.style.padding = '10px';
gui.style.borderRadius = '8px';
gui.style.fontFamily = 'sans-serif';
gui.style.zIndex = '999999';
gui.style.cursor = 'move';

gui.addEventListener('mousedown', function dragMouseDown(e) {
  e.preventDefault();
  let shiftX = e.clientX - gui.getBoundingClientRect().left;
  let shiftY = e.clientY - gui.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    gui.style.left = pageX - shiftX + 'px';
    gui.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onMouseMove);
  }, { once: true });
});

gui.ondragstart = () => false;

// Button functions
function changeText() {
  document.querySelectorAll('*').forEach(el => {
    if (el.children.length === 0 && el.textContent.trim()) {
      el.textContent = "HACKED 😈";
    }
  });
}

function changeImages() {
  document.querySelectorAll('img').forEach(img => {
    img.src = 'https://i.imgur.com/4M7IWwP.gif';
  });
}

function invertColors() {
  document.body.style.filter = 'invert(1)';
}

// Bind buttons
document.getElementById('btn-text').addEventListener('click', changeText);
document.getElementById('btn-img').addEventListener('click', changeImages);
document.getElementById('btn-invert').addEventListener('click', invertColors);
