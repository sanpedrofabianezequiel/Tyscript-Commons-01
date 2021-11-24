import React from 'react';
import { Counter } from './bases/Counter';
import { CounterBY } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';
import { CounterReducerComponent } from './counter-reducer/CounterReducerComponent';

function App() {
  return (
    <>
      <Counter  initialState = {15} />
      <CounterBY  initialState= {15}/>
      <CounterEffect initialState = {5} />
      <CounterHook initialState={2} />
      <CounterReducerComponent />
    </>
  );
}

export default App;
