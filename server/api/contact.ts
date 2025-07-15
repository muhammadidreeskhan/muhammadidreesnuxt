import { defineEventHandler, readBody, setResponseStatus } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      setResponseStatus(event, 400);
      return { error: 'Missing required fields' };
    }
    // Validate email format (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      setResponseStatus(event, 400);
      return { error: 'Invalid email format' };
    }
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, message: 'Your message has been received' };
  } catch (error) {
    setResponseStatus(event, 500);
    return { error: 'An error occurred while processing your request' };
  }
});