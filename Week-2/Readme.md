# JavaScript Class Notes Week 2 

## Goals of Today's Class
1. **I/O Tasks**: Understanding input/output operations and their significance.
2. **Callbacks**: Learning how callbacks work for asynchronous operations.
3. **Functional Arguments**: Using functions as arguments in other functions.
4. **Async vs Sync Code**: Differentiating between asynchronous and synchronous code.
5. **Event Loops, Callback Queues, JS**: Understanding how JavaScript handles asynchronous operations.

## Goals of Tomorrow's Class
1. **Async/Await**: Learning the `async/await` syntax for handling asynchronous code more efficiently.
2. **Promises**: Understanding promises for better async code management.
3. **Practicing Async JS**: Hands-on practice with async/await and promises.

## Concepts and Examples

### 1. Normal Functions in JavaScript
- **Finding Sum of Two Numbers**
  - A basic function that adds two numbers together.
- **Finding Sum from 1 to a Number**
  - A function that calculates the sum of all numbers from 1 to a given number.

### 2. Synchronous Code
- **Definition**: Executes line by line, waiting for each operation to complete before moving to the next.
- **Example**: Code that calculates sums of different ranges sequentially.

### 3. I/O Heavy Operations
- **Definition**: Operations involving significant data transfer, such as reading files or making HTTP requests.
- **Examples**:
  - Reading a file
  - Starting a clock
  - HTTP Requests

### 4. I/O Bound Tasks vs CPU Bound Tasks
- **CPU Bound Tasks**: Limited by the CPU's speed and processing power.
  - **Example**: Performing a large number of calculations.
- **I/O Bound Tasks**: Limited by the system's input/output capabilities.
  - **Example**: Reading a file from disk.

### 5. Functional Arguments
- **Definition**: Passing functions as arguments to other functions for more flexible code.
- **Example**: A calculator program that performs operations like addition, subtraction, multiplication, and division using functional arguments.

### 6. Asynchronous Code and Callbacks
- **Definition**: Code that does not execute line by line but instead waits for certain operations to complete before moving on.
- **Callbacks**: Functions passed as arguments to handle operations after they are completed.
- **Example**: Reading a file asynchronously and using a callback to handle the result.

### 7. Using `setTimeout` for Asynchronous Execution
- **Definition**: Executes code after a specified delay.

## JavaScript Architecture for Async Code

1. **Call Stack**: A structure that keeps track of function calls in a Last In, First Out (LIFO) manner.
   - **Function Call Example**: Shows how functions are pushed to and popped from the stack.

2. **Web APIs**: Provided by the browser or Node.js for operations like network requests or setting timers.
   - **Examples**: `setTimeout`, `fetch` for HTTP requests.

3. **Callback Queue**: A list of tasks waiting to be executed after the call stack is empty.

4. **Event Loop**: Continuously checks if the call stack is empty and processes tasks from the callback queue.

### Visual Learning
- **JS Architecture for Async Code**: [Understanding JS Execution](http://latentflip.com/loupe/)

## Summary
- **Synchronous Code**: Executes tasks one by one.
- **Asynchronous Code**: Executes tasks out of order and handles them using callbacks, promises, or async/await.
- **Event Loop**: Manages asynchronous tasks by checking the call stack and processing the callback queue.

This `README.md` file provides a structured overview of the concepts you'll be learning and practicing. If you have any more specific questions or need further explanations, feel free to ask!
