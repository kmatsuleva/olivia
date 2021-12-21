import './App.scss';
import AdventureCardsList from './components/Cards/AdventureCardsList';
import adventureCards from './mocks/adventure-cards';
import Section from './components/General/Section';
import ContactUsForm from './components/Form/ContactUsForm';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Section subheading="Subheading" heading="Heading" isFullWidth={false} isCentered>
        <AdventureCardsList cardsList={adventureCards} />
      </Section>
      <Section heading="Contact Us" isFullWidth={false} isCentered={false}>
        <ContactUsForm />
      </Section>
      <Section subheading="Testimonials" heading="Client success stories" isFullWidth={false} isCentered={false}>
        <Testimonials />
      </Section>
    </>
  );
}

export default App;
