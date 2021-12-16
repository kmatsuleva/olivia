import './App.scss';
import AdventureCardsList from './components/Cards/AdventureCardsList';
import adventureCards from './mocks/adventure-cards';
import Section from './components/General/Section';

function App() {
  return (
    <>
      <Section subheading="Subheading" heading="Heading" isFullWidth={false} isCentered>
        <AdventureCardsList cardsList={adventureCards} />
      </Section>
      <Section>
      </Section>
      <Section>
      </Section>
      <Section>
      </Section>
    </>
  );
}

export default App;
