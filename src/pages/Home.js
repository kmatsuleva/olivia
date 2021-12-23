import { Link } from "react-router-dom";
import OverviewCardList from '../components/Cards/OverviewCardList';
import aventureCards from '../mocks/aventure-cards';
import testimonials from '../mocks/testimonials';
import Section from '../components/General/Section';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <header>
                <Section>
                    <Link to="/contact">Contact us</Link>
                </Section>
            </header>
            <main>
                <Section subheading="Work with me" heading="Choose your aventure" isFullWidth={false} isCentered>
                    <OverviewCardList cardsList={aventureCards} />
                </Section>
                <Section subheading="Testimonials" heading="Client success stories" isFullWidth={false} isCentered={false}>
                    <Testimonials testimonials={testimonials}/>
                </Section>
            </main>
            <footer></footer>
        </>
    );
}

export default Home;