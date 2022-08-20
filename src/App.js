import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "HELLOWORLD";
function App() {
  return (
    <div>
      <WordCard value={word}/>
    </div>
  );
}

export default App;
