import './App.scss';
import AdventureCardsList from './components/AdventureCardsList';
import adventureCards from './mocks/adventure-cards';
import Section from './components/Section';

function App() {
  return (
    <>
      <Section subheading="Subheading" heading="Heading" isFullWidth={false} isCentered>
        <AdventureCardsList cardsList={adventureCards} />
      </Section>
    </>
  );
}

export default App;
