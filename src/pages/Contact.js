
import Section from '../components/General/Section';
import ContactUsForm from '../components/Form/ContactUsForm';

const Contact = () => {
    return (
        <Section heading="Contact Us" isFullWidth={false} isCentered={false}>
            <ContactUsForm />
        </Section>
    );
}

export default Contact;