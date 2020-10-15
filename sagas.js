import { all, call, put, takeEvery,takeLatest } from 'redux-saga/effects'
import {delay} from 'redux-saga/effects'


export function* helloSaga() {
  yield sleep(1000);
  console.log('Hello Saga!');
  return "helloSagaRun";
}

export function* incrementAsync() {
  // console.log('running',delay);
  yield delay(1000);
  // console.log('runnning done');
  yield put({type: 'INCREMENT'})
}
export function sleep(mileseconds){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('waiting done');
      },1000);
  });
}
export async function asyncSugarSleep(mileseconds){
 return  await sleep(mileseconds);
}
export function* myOwnIncrementAsync(){
  //the generator executor of saga convert the action to dispatch action
  yield put({type: 'CUSTOM_ACTION_TYPE',payload:{arthur:'jeff chung'}});
  //the generator executor of saga handle promise&another generator by chaining them
  console.time("wait");
  let callHelloSagaRes = yield call(helloSaga);
  //let sleepRes = yield sleep(1000);, do the same thing, but wrap it with call  make it more testable(named as declarative calls)
  //https://redux-saga-in-chinese.js.org/docs/basics/DispatchingActions.html
  //allow testing by mocking
  let sleepRes = yield call(sleep,1000);
  let asyncSleepRes = yield call(asyncSugarSleep,1000);
 
  console.log({sleepRes,asyncSleepRes,callHelloSagaRes})
  console.timeEnd("wait");

  yield put({type: 'INCREMENT'});
  yield put({type: 'INCREMENT'});

}


export function* fetchData(action){

  try{

    yield sleep(1000);
    yield put({type:"FETCH_SUCCEED",payload:{arthur:'jeff chung(chungchi300@hotmail.com',actionWhenUserDispatch:action}});
  }catch(error){
    yield put({type:"FETCH_FAIL",payload:{error:'some error'}});
  }
}
export function* customWatch(){
  //can implement debounce mechanism
  yield takeEvery("FETCH_REQUEST",fetchData);
  yield takeLatest("DEBOUNCE_FETCH_REQUEST",fetchData);
}
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
export function* watchOwnIncrementAsync() {
  yield takeEvery('INCREMENT_OWN_ASYNC', myOwnIncrementAsync)
}
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(helloSaga),
    call(watchIncrementAsync),
    call(watchOwnIncrementAsync),
    call(customWatch),
  ])
}
