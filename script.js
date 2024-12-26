const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

let user = 'user1'; // Ganti dengan 'user2' untuk pengguna kedua

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', user);
        messageElement.textContent = `${user === 'user1' ? 'User  1' : 'User  2'}: ${message}`;
        chatBox.appendChild(messageElement);
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll ke bawah
    }
});

// Toggle user untuk simulasi dua pengguna
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
        user = user === 'user1' ? 'user2' : 'user1'; // Ganti pengguna setelah mengirim pesan
    }
});