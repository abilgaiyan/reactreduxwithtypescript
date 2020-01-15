import React from 'react';
import { connect } from 'react-redux';
import { IToDos, fetchToDos, deleteToDos } from '../store/actions';
import { IStoreState } from '../store/reducers';

interface IAppProps {
  todos: IToDos[];
  // fetchToDos: typeof fetchToDos;
  fetchToDos: Function;
  deleteToDos: typeof deleteToDos;
}

interface IAppState {
  fetching: boolean;
}

export class _App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: IAppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  // componentDidMount() {
  //   this.props.fetchToDos();
  // }

  onButtonClick = (): void => {
    this.props.fetchToDos();
    this.setState({ fetching: true });
  };

  onDeleteToDo = (id: number): void => {
    this.props.deleteToDos(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todos: IToDos) => {
      return (
        <li key={todos.id} onClick={() => this.onDeleteToDo(todos.id)}>
          {todos.title}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div>React - Redux with Typescript for ToDo app</div>
        <button onClick={this.onButtonClick}>Fetch ToDos</button>
        {this.state.fetching ? 'Loading' : null}
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}
const mapStateToProps = ({ todos }: IStoreState): { todos: IToDos[] } => {
  return { todos };
};
export const App = connect(mapStateToProps, { fetchToDos, deleteToDos })(_App);
