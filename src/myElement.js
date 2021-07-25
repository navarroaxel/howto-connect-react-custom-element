import {render} from 'react-dom';
import App from './App';

class MyElement extends HTMLElement {
  static get observedAttributes() {
    return ['text', 'onclick'];
  }

  shadow;

  constructor() {
    // Always call super first in constructor
    super();

    this.shadow = this.attachShadow({mode: 'open'});
    // write element functionality in here
    this.renderElement();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`The attribute ${name} was updated.`);
    this.renderElement();
  }

  disconnectedCallback() {
    console.log('the component was removed!');
  }

  renderElement() {
    const onClick = this.getAttribute('onclick')
    const text = this.hasAttribute('text')
      ? this.getAttribute('text')
      : undefined;
    render(<App text={text} onClick={onClick}><slot/></App>, this.shadow);
  }
}

export default MyElement
