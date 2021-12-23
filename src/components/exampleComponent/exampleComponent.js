import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../state/example";

export function Counter() {
  const { value } = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button 
          aria-label="Increment value by 5"
          onClick={() => dispatch(increment(5))}>Increment by 5</button>
      </div>
    </div>
  );
}
