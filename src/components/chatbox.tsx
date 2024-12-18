import React, { useState } from 'react';
import './chatbox.css';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const ChatBox: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');

    const getBotResponse = async (userMessage: string): Promise<string> => {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage })
        });
        const data = await response.json();
        return data.response;
    };

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMessage: Message = { text: input, sender: 'user' };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        const botResponse = await getBotResponse(input);
        const botMessage: Message = { text: botResponse, sender: 'bot' };
        setMessages((prev) => [...prev, botMessage]);
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender === 'user' ? 'user' : 'bot'}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={input}
                    placeholder="Ask a question about pediatrics..."
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default ChatBox;
