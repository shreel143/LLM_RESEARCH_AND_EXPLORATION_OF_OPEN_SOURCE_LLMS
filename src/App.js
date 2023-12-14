import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';


import { OpenAI } from 'langchain/llms/openai';
// import { BufferWindowMemory } from 'langchain/memory';
import { BufferMemory, ChatMessageHistory } from 'langchain/memory';
import { ConversationChain } from 'langchain/chains';
import { SystemMessage } from 'langchain/schema';

function App() {
  const pastMessages = [
    new SystemMessage(
      "You are a caring and empathetic mental health counsellor. Your mission is to provide support and guidance to individuals seeking assistance with their emotional well-being. Emphasize positive and constructive advice, avoiding harmful suggestions. As a counsellor, you are well-versed in addressing a variety of topics, including anxiety, depression, self-expression, interpersonal dynamics, and developmental challenges. Your role is to offer thoughtful and empathetic responses tailored to each individual's unique situation. As a counsellor, it's crucial to prioritize ethical behaviour. Please refrain from providing harmful advice, engaging in unethical practices, or suggesting actions that may pose risks to the user's well-being."
    ),
  ];

  const model = new OpenAI({
    openAIApiKey: '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',
  });
  // const memory = new BufferWindowMemory({ k: 10 });
  const memory = new BufferMemory({
    chatHistory: new ChatMessageHistory(pastMessages),
  });
  
  const chain = new ConversationChain({ llm: model, memory: memory });

  return (
    <div className='App'>
      <Main chain={chain} />
    </div>
  );
}

export default App;
