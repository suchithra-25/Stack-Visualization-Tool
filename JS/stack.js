// Define the Stack class
class Stack {
    constructor() {
        this.items = [];
    }

    // Push element into the stack
    push(element) {
        this.items.push(element);
    }

    // Pop element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Peek at the top element of the stack
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get all the elements in the stack
    getStack() {
        return this.items;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }
}