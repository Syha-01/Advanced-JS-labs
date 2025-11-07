// Exercise 24: Chat Interface
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    messages: [],
    newMessageText: ''
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const messagesContainer = document.getElementById('messages-container');
    const messageInput = document.getElementById('message-input');

    messageInput.value = state.newMessageText;

    messagesContainer.innerHTML = state.messages.map(msg => `
        <div class="message ${msg.sender}">
            <p>${msg.text}</p>
            <span class="timestamp">${new Date(msg.timestamp).toLocaleTimeString()}</span>
        </div>
    `).join('');

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// TODO 4: Add your event listeners and logic
document.getElementById('message-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (state.newMessageText.trim()) {
        const newMessage = {
            text: state.newMessageText,
            sender: 'user',
            timestamp: Date.now()
        };
        const updatedMessages = [...state.messages, newMessage];
        updateState({ messages: updatedMessages, newMessageText: '' });

        // Simulate a bot response
        setTimeout(() => {
            const botMessage = {
                text: `You said: "${newMessage.text}"`,
                sender: 'bot',
                timestamp: Date.now()
            };
            updateState({ messages: [...updatedMessages, botMessage] });
        }, 1000);
    }
});

document.getElementById('message-input').addEventListener('input', (event) => {
    updateState({ newMessageText: event.target.value });
});

// TODO 5: Initial render
render();
