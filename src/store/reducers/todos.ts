import { IToDos, ActionTypes, Action } from '../actions';

export const todosReducer = (
  state: IToDos[] = [],
  action: Action
): IToDos[] => {
  switch (action.type) {
    case ActionTypes.fetchToDos:
      return action.payload;
    case ActionTypes.deleteToDos:
      return state.filter((todo: IToDos) => {
        return todo.id !== action.payload;
      });
    default:
      return state;
  }
};
