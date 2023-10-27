/* Stacks */

// functions: push, pop, peak, length

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  // Public methods

  // Adds a value into the end of the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and returns the value at the end of the stack
  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  size() {
    return this.count;
  }

  // Returns the value at the end of the stack
  peek() {
    return this.storage[this.count - 1];
  }
}

let letters = new Stack();

let word = "racecar";

let rword = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is not a palindrome");
}
