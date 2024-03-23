import styles from './Home.module.css'
import RecentImages from '../../Components/RecentImages/RecentImages';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import HeroSection from '../../Components/HeroSection/HeroSection';
import GetStarted from '../../Components/GetStarted/GetStarted';
import Features from '../../Components/Features/Features';


const Home = () => {

    return (
        <>
            <HeroSection />
            <HowItWorks />
            <Features />
            <GetStarted />
            <RecentImages />
        </>
    )
}

export default Home;