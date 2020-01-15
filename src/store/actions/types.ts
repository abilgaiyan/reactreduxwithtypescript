import { IFetchToDosAction, IDeleteToDosAction } from './todos';

export enum ActionTypes {
  fetchToDos,
  deleteToDos
}

export type Action = IFetchToDosAction | IDeleteToDosAction;
