import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <span className='App-label'>To create .stories.tsx files from react components just run:</span>
      <SyntaxHighlighter style={dark}>
        yarn create-stories
      </SyntaxHighlighter>
    </div>
  );
};

export default App;
