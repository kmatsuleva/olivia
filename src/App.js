import './App.scss';
import AdventureCardsList from './components/AdventureCardsList';
import adventureCards from './mocks/adventure-cards'

function App() {
  return (
    <>
      <AdventureCardsList cardsList={adventureCards} />
    </>
  );
}

export default App;
