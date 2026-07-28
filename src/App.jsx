import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://127.0.0.1:8000";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat, loading]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      content: message.trim(),
    };

    setChat((prev) => [...prev, userMessage]);

    const currentMessage = message.trim();

    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/chat`,
        {
          message: currentMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage = {
        role: "assistant",
        content: response.data.response,
      };

      setChat((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Backend Error:", error);

      let errorMessage = "Unable to connect to the backend.";

      if (error.response) {
        errorMessage = `Server Error (${error.response.status})`;
      } else if (error.request) {
        errorMessage = "Backend is not running.";
      }

      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          content: errorMessage,
        },
      ]);
    }

    setLoading(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !loading) {
      sendMessage();
    }
  }

  return (
    <div className="app">

      <h1>LLaMA 3.2 Chatbot</h1>

      <div className="chat-container">

        {chat.length === 0 && (
          <div className="bot-message">
            <strong>AI</strong>
            <p>Hello! Ask me anything.</p>
          </div>
        )}

        {chat.map((msg, index) => (
          <div
            key={index}
            className={
              msg.role === "user"
                ? "user-message"
                : "bot-message"
            }
          >
            <strong>
              {msg.role === "user"
                ? "You"
                : "AI"}
            </strong>

            <p>{msg.content}</p>
          </div>
        ))}

        {loading && (
          <div className="bot-message">
            <strong>AI</strong>
            <p>Thinking...</p>
          </div>
        )}

        <div ref={chatEndRef}></div>

      </div>

      <div className="input-container">

        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <button
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>

      </div>

    </div>
  );
}

export default App;