import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }
        try {
            // Simulate AI response (replace with OpenAI or other APIs as needed)
            const botResponse = `You said: "${message}"`;
            res.status(200).json({ response: botResponse });
        } catch (error) {
            console.error('Error processing message:', error);
            res.status(500).json({ error: 'Something went wrong' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
