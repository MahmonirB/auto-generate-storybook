import { OpenAIApi } from 'openai';
import { openAIConfig } from '../config';

export const openAIOptions = {
    model: 'text-davinci-003',
    temperature: 0.5,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
  };

export const openAIInstance = new OpenAIApi(openAIConfig);
