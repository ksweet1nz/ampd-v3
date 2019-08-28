import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h3>click the button</h3>
      <h3>Count: {count}</h3>
      <button onCLick={() => setCount(count + 1)}>click me</button>
    </div>
  )
}

export default Counter
