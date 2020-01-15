import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface IToDos {
  id: number;
  title: string;
  completed: boolean;
}

export interface IFetchToDosAction {
  type: ActionTypes.fetchToDos;
  payload: IToDos[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';
export const fetchToDos = () => {
  return async (dispath: Dispatch) => {
    const response = await axios.get<IToDos[]>(url);

    dispath<IFetchToDosAction>({
      type: ActionTypes.fetchToDos,
      payload: response.data
    });
  };
};
export interface IDeleteToDosAction {
  type: ActionTypes.deleteToDos;
  payload: number;
}
export const deleteToDos = (id: number): IDeleteToDosAction => {
  return {
    type: ActionTypes.deleteToDos,
    payload: id
  };
};
