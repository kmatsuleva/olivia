import { Link } from "react-router-dom";
import IconCardList from '../components/Cards/IconCardList';
import aventureCards from '../mocks/aventure-cards';
import Section from '../components/General/Section';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Section>
                <Link to="/about">Contact us</Link>
            </Section>
            <Section subheading="Work with me" heading="Choose your aventure" isFullWidth={false} isCentered>
                <IconCardList cardsList={aventureCards} />
            </Section>
            <Section subheading="Testimonials" heading="Client success stories" isFullWidth={false} isCentered={false}>
                <Testimonials />
            </Section>
        </>
    );
}

export default Home;