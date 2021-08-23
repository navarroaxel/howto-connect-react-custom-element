import {useState} from "react";

const App = ({text = 'The button wasn\'t pressed yet.', children, onClick}) => {
  const [date] = useState(new Date());1
  return (
    <div>
      This is a custom element, created at {date.toString()}
      <br/>
      {text}
      <br/>
      <button onClick={onClick}>Click me!</button>
      <br/>
      {children}
    </div>
  );
};

export default App;
