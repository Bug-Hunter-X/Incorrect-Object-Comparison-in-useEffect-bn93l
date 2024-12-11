# Incorrect Object Comparison in React's useEffect Hook

This example demonstrates a common error in React's `useEffect` hook: incorrectly comparing objects for changes.  Directly comparing objects using `!==` performs a shallow comparison, which means it only checks if the references are the same, not if the object contents are the same. This leads to unexpected re-renders or missed updates.

The solution involves using a deep comparison library or custom logic to accurately determine if the object's contents have changed.