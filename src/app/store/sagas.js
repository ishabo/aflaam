import { all } from "redux-saga/effects";
import * as movies from "movies";

export default function* rootSagas() {
  yield all([...movies.sagas.watcher() /**, ...moduleName.sagas.watcher */]);
}
