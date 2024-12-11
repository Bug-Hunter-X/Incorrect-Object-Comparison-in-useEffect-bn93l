```javascript
import { useEffect, useState, useMemo } from 'react';
import deepEqual from 'deep-equal'; // Or any other deep comparison library

function MyComponent() {
  const [count, setCount] = useState(0);
  const [someObject, setSomeObject] = useState({ a: 1, b: 2 });

  const previousSomeObject = useMemo(() => someObject, [someObject]);

  useEffect(() => {
    // Correct logic: Use deep comparison
    if (!deepEqual(someObject, previousSomeObject)) {
      // Perform some side effect
      console.log('Object changed:', someObject);
    }
  }, [someObject, previousSomeObject]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setSomeObject({ ...someObject, a: someObject.a + 1 })}>Update Object</button>
    </div>
  );
}
```