/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:

Methods pop, top and getMin operations will always be called on non-empty stacks.
*/

/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (this.stack.length === 0) {
    this.stack.push({
      val: x,
      min: x,
    })
  } else if (x < this.getMin()) {
    this.stack.push({
      val: x,
      min: x,
    })
  } else {
    this.stack.push({
      val: x,
      min: this.getMin(),
    })
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.length === 0
    ? null
    : this.stack[this.stack.length - 1].val
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack.length === 0
    ? null
    : this.stack[this.stack.length - 1].min
}
