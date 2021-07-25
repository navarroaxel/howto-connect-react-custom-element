import MyElement from './myElement'

window.customElements.define('my-element', MyElement);

elem.onclick = () => elem.setAttribute('text', 'The button was pressed.');
