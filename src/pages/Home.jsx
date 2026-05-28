import TopOfferBar from "../components/layout/TopOfferBar";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import BrandStrip from "../components/layout/BrandStrip";
import MainLayout from "../layouts/MainLayout";
import SignupPage from "./Signup";
import LoginPage from "./Login";

const Home = () => {
    return (
        <>
            {/* <TopOfferBar />

            <Navbar />

            <HeroSection />

            <BrandStrip /> */}
            
            {/* <SignupPage/> */}
                {/* <LoginPage/> */}
            <MainLayout>
                <HeroSection />
            </MainLayout>
        </>
    );
};

export default Home;