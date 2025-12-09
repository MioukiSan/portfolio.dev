import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { runChat } from "../lib/gemini";
import logo from "@/assets/pageLogo.png";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello, thank you for visiting my portfolio. How may I help you?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    // When the chatbox opens, scroll to the bottom instantly.
    if (isOpen) {
      // We use a timeout to ensure the DOM has updated before scrolling.
      setTimeout(
        () => messagesEndRef.current?.scrollIntoView({ behavior: "auto" }),
        0
      );
    }
  }, [messages, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage = {
      id: Date.now(), // Use timestamp for a more robust unique ID
      sender: "user",
      text: inputValue,
    };

    // Add user's message and a "Thinking..." placeholder for the bot
    const thinkingMessageId = Date.now() + 1;
    const thinkingMessage = {
      id: thinkingMessageId,
      sender: "bot",
      text: "Thinking...",
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      userMessage,
      thinkingMessage,
    ]);
    setInputValue("");

    try {
      const botResponseText = await runChat(messages, inputValue);
      // Update the "Thinking..." message with the actual response
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === thinkingMessageId ? { ...msg, text: botResponseText } : msg
        )
      );
    } catch (error) {
      console.error("Failed to get bot response:", error);
      // Update the placeholder with an error message
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === thinkingMessageId
            ? { ...msg, text: "Sorry, something went wrong." }
            : msg
        )
      );
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-110"
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 md:w-96 h-[500px] bg-background border rounded-lg shadow-xl flex flex-col motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="flex justify-between items-center p-3 bg-muted border-b">
        <div className="flex flex-row">
          <img className="w-10 h-10 rounded-full" src={logo} alt="" />
          <h3 className="font-md text-md p-2">Portfolio AI Chatbot</h3>
        </div>
        <button
          onClick={toggleChat}
          className="text-muted-foreground hover:text-foreground"
          aria-label="Close chat"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages area */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-2.5 mb-4 ${
              message.sender === "user" ? "justify-end" : ""
            }`}
          >
            <div
              className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 ${
                message.sender === "user"
                  ? "bg-primary text-primary-foreground rounded-s-xl rounded-ee-xl"
                  : "bg-gray-100 dark:bg-gray-700 rounded-e-xl rounded-es-xl"
              }`}
            >
              <p className="text-sm font-normal">{message.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="p-3 border-t">
        <div className="flex items-center gap-2">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-input p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
          />
          <button
            onClick={handleSendMessage}
            className="p-2 text-primary disabled:opacity-50"
            aria-label="Send message"
            disabled={!inputValue.trim()}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
