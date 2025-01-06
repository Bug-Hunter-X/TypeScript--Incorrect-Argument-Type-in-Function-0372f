# TypeScript: Incorrect Argument Type in Function

This repository demonstrates a common TypeScript error involving incorrect argument types in function calls.  The `greeter` function is defined to expect a single string but is called with an array of strings. This example highlights the importance of type checking in TypeScript.

## Bug

The bug lies in the function call to `greeter`.  The function expects a string, but an array is passed. This leads to a type error at runtime (if not caught during compilation).

## Solution

The solution involves changing the `greeter` function to either accept an array of strings or to properly select an individual string from the array for processing.