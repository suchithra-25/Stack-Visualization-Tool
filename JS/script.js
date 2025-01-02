// Create a new Stack instance
let stack = new Stack();

// Handle pushing elements into the stack
function handlePush() {
    let input = document.getElementById("stackInput").value;
    
    if (input === "") {
        document.getElementById("message").textContent = "Please enter a value to push.";
        return;
    }

    // Push the value into the stack
    stack.push(input);
    
    // Clear the input field and any message
    document.getElementById("stackInput").value = "";
    document.getElementById("message").textContent = "";

    // Render the updated stack
    renderStack();
}

// Handle popping elements from the stack
function handlePop() {
    if (stack.isEmpty()) {
        document.getElementById("message").textContent = "Stack is empty! Cannot pop.";
        return;
    }

    // Pop the top value from the stack
    stack.pop();
    
    // Clear any message
    document.getElementById("message").textContent = "";

    // Render the updated stack
    renderStack();
}

// Show the peek value (top of the stack)
function showPeek() {
    let peekElement = stack.peek();
    document.getElementById("peek").textContent = `Peek: ${peekElement}`;
}

// Check if the stack is empty
function checkIsEmpty() {
    let isEmptyMessage = stack.isEmpty() ? "Yes, the stack is empty." : "No, the stack is not empty.";
    document.getElementById("isEmpty").textContent = `Is Empty: ${isEmptyMessage}`;
}

// Display the current stack
function displayStack() {
    let currentStack = stack.getStack();
    document.getElementById("currentStack").textContent = `Current Stack: ${currentStack.join(", ")}`;
}

// Render the stack visually in the UI
function renderStack() {
    let stackContainer = document.getElementById("stack");
    stackContainer.innerHTML = "";  // Clear the current stack UI

    // Get the current elements from the stack and render them
    let stackElements = stack.getStack();
    stackElements.forEach((element) => {
        let li = document.createElement("li");
        li.textContent = element;
        stackContainer.appendChild(li);
    });
}