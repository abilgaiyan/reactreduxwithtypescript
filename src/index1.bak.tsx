import React from 'react';
import ReactDOM from 'react-dom';

interface IAppProps {
  color: string;
}
interface IAppState {
  counter: number;
}

// Define functional component in react using typescript
// const App = (props: IAppProps): JSX.Element => {
//   return (
//     <div>
//       <div>{props.color}</div>
//     </div>
//   );
// };
class App extends React.Component<IAppProps, IAppState> {
  // state = { counter: 0 };
  constructor(props: IAppProps) {
    super(props);
    this.state = { counter: 0 };
  }
  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };
  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div>
        <div>{this.props.color}</div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

ReactDOM.render(<App color="red" />, document.querySelector('#root'));
