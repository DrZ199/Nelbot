import { API_ENDPOINTS } from './apiConfig';

export async function sendMessage(message) {
  try {
    const response = await fetch(API_ENDPOINTS.HUGGINGFACE_SPACE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_ENDPOINTS.API_KEY}`
      },
      body: JSON.stringify({ 
        inputs: {
          question: message
        }
      }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data.outputs;
  } catch (error) {
    console.error('Error calling Hugging Face Space API:', error);
    throw error;
  }
}

