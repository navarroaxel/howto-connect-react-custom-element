import {useState} from "react";

const App = ({text, children, onClick}) => {
  const [date] = useState(new Date())
  return (
    <div>
      This is a custom element, created at {date.toString()}
      <br/>
      {text || 'The button wasn\'t pressed yet.'}
      <br/>
      <button onClick={onClick}>Click me!</button>
      <br/>
      {children}
    </div>
  );
};

export default App;
