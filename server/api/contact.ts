import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Missing required fields'
        })
      };
    }
    
    // Validate email format (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Invalid email format'
        })
      };
    }
    
    // In a real application, you would:
    // 1. Save the message to a database
    // 2. Send an email notification
    // 3. Possibly trigger other workflows
    
    // For now, we'll log it and simulate a success response
    console.log('Contact form submission:', body);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Your message has been received'
      })
    };
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'An error occurred while processing your request'
      })
    };
  }
});