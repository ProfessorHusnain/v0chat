import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();
  console.log(messages)
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-0125',
	  max_tokens: 150,
    stream: true,
    messages,
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response/*, {
    onStart: async () => {
      // This callback is called when the stream starts
      // You can use this to save the prompt to your database
      await savePromptToDatabase(prompt);
    },
    onToken: async (token: string) => {
      // This callback is called for each token in the stream
      // You can use this to debug the stream or save the tokens to your database
      console.log(token);
    },
    onCompletion: async (completion: string) => {
      // This callback is called when the stream completes
      // You can use this to save the final completion to your database
      await saveCompletionToDatabase(completion);
    },
  }*/);
  
  return new StreamingTextResponse(stream);
}