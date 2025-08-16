  <script>
    async function sendMessage() {
      const input = document.getElementById("user-input");
      const message = input.value.trim();
      if (!message) return;

      addMessage(message, "user");
      input.value = "";

      const reply = await getAIReply(message);
      addMessage(reply, "bot");
    }

    function addMessage(text, sender) {
      const chatBox = document.getElementById("chat-box");
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message", sender);
      messageDiv.textContent = text;
      chatBox.appendChild(messageDiv);
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    async function getAIReply(userMessage) {
      try {
        const response = await fetch("http://localhost:5000/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMessage })
        });

        const data = await response.json();
        return data.reply;
      } catch (error) {
        return "⚠️ Error connecting to AI server.";
      }
    }
  </script>