import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { IToDos } from '../actions';

export interface IStoreState {
  todos: IToDos[];
}
export const reducers = combineReducers<IStoreState>({
  todos: todosReducer
});
