import TopOfferBar from "../components/layout/TopOfferBar";
import Navbar from "../components/layout/Navbar";
import BrandStrip from "../components/layout/BrandStrip";

const MainLayout = ({ children }) => {
  return (
    <>
      <TopOfferBar />

      <Navbar />

      <main>{children}</main>

      <BrandStrip />
    </>
  );
};

export default MainLayout;