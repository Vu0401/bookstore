// js/components/Chatbot.js
export function renderChatbot(parentElementId) {
    const parentElement = document.getElementById(parentElementId);
    if (!parentElement) {
        console.error(`Element with ID "${parentElementId}" not found for Chatbot.`);
        return;
    }

    const chatbotContainer = document.createElement('div');
    chatbotContainer.classList.add('chatbot-container'); // Start in collapsed state (css handles initial hidden)
    chatbotContainer.innerHTML = `
        <div class="chatbot-header">
            Support Chatbot <span class="close-chatbot">×</span>
        </div>
        <div class="chatbot-messages" id="chatbotMessages">
            <div class="message bot-message">Hello! How can I help you?</div>
        </div>
        <div class="chatbot-input">
            <input type="text" id="chatbotInput" placeholder="Type your message...">
            <button id="sendChat"><i class="fas fa-paper-plane"></i></button>
        </div>
    `;
    parentElement.appendChild(chatbotContainer);

    const chatbotMessages = chatbotContainer.querySelector('#chatbotMessages');
    const chatbotInput = chatbotContainer.querySelector('#chatbotInput');
    const sendChatButton = chatbotContainer.querySelector('#sendChat');
    const closeChatbotButton = chatbotContainer.querySelector('.close-chatbot');
    const chatbotHeader = chatbotContainer.querySelector('.chatbot-header'); // Get header for toggle
    const openChatbotButton = document.getElementById('open-chatbot-button'); // Get the new floating button

    function addMessage(message, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', `${sender}-message`);
        msgDiv.textContent = message;
        chatbotMessages.appendChild(msgDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function sendChatMessage() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user');
            chatbotInput.value = '';

            setTimeout(() => {
                let botResponse = "I'm sorry, I don't understand your request. Can you ask about books or orders?";
                if (userMessage.toLowerCase().includes("book")) {
                    botResponse = "What kind of books are you looking for? Or do you have a question about a specific book?";
                } else if (userMessage.toLowerCase().includes("order")) {
                    botResponse = "Please provide your order number so I can check.";
                } else if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
                    botResponse = "Hello! How can I help you today?";
                }
                addMessage(botResponse, 'bot');
            }, 500);
        }
    }

    sendChatButton.addEventListener('click', sendChatMessage);
    chatbotInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            sendChatMessage();
        }
    });

    // --- New Chatbot Toggle Logic ---

    // Function to show the chatbot main window
    function showChatbot() {
        chatbotContainer.style.opacity = '1';
        chatbotContainer.style.transform = 'translateY(0)';
        chatbotContainer.style.visibility = 'visible';
        // When shown, expand it by default or keep it collapsed based on preference
        chatbotContainer.classList.add('expanded'); // Start expanded when opened
    }

    // Function to hide the chatbot main window
    function hideChatbot() {
        chatbotContainer.style.opacity = '0';
        chatbotContainer.style.transform = 'translateY(100px)';
        chatbotContainer.style.visibility = 'hidden';
        // When hidden, ensure it's in a collapsed state for next open
        chatbotContainer.classList.remove('expanded');
    }

    // Function to toggle expanded/collapsed state within the chatbot window
    function toggleExpandedState() {
        chatbotContainer.classList.toggle('expanded');
    }

    // Event listeners
    openChatbotButton.addEventListener('click', showChatbot); // Floating button opens it
    closeChatbotButton.addEventListener('click', hideChatbot); // 'X' button hides it completely

    // Click header to toggle expand/collapse state
    chatbotHeader.addEventListener('click', toggleExpandedState);

    // Initial state: Chatbot is hidden when page loads
    hideChatbot(); // Ensure it's hidden on load
}