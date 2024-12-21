import React, { useState, useRef, useEffect } from 'react';
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MessageBubble from './MessageBubble';
import { sendMessage } from '../api/llamaApi';
import styles from '../styles/Chat.module.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await sendMessage(input);
      const botMessage = { sender: 'bot', text: response };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = { sender: 'bot', text: 'An error occurred. Please try again.', isError: true };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className={styles['chat-container']}>
      <Box className={styles.messages}>
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </Box>
      <form onSubmit={handleSubmit} className={styles['input-bar']}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Ask NelsonBot..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          sx={{ borderRadius: '20px', minWidth: '50px', ml: 1 }}
        >
          {loading ? <CircularProgress size={24} /> : <SendIcon />}
        </Button>
      </form>
    </Box>
  );
}

export default Chat;

