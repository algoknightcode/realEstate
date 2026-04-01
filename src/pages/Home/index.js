import Header1 from '../../components/Header1';
import Countjs from '../../components/countjs';
import { Header3 } from '../../components/Header3';
import { Header5 } from '../../components/Header5';
import { Header4 } from '../../components/Header4';
import { Subheader } from '../../components/subheader';
import Faq from '../../components/Faq';
import AboveFooter from '../../components/AboveFooter';

const Home = () => {
    return (
        <>
            <Header1 />
            <Countjs />
            <Header3 />
            <Header5 />
            <Header4 />
            <Subheader />
            <Faq />
            <AboveFooter />
        </>
    );
};

export default Home;
