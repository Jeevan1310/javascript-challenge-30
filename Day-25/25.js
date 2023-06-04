const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', function (event) {
  console.log('Connected to the server');
});

// Listen for messages
socket.addEventListener('message', function (event) {
  const messages = document.getElementById('messages');
  const newMessage = document.createElement('div');
  newMessage.textContent = event.data;
  messages.appendChild(newMessage);
});

// Send message when the button is clicked
const sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', function () {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value;

  // Send the message to the server
  socket.send(message);

  // Clear the input field
  messageInput.value = '';
});
