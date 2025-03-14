import React from "react";
import BannerSection from "./sections/BannerSection";
import SloganSection from "./sections/SloganSection";
import DescriptionSection from "./sections/DescriptionSection";
import Footer from "../Footer";

function Home() {

    return (
        <>
            <BannerSection />

            <SloganSection />

            <DescriptionSection />

            <Footer />

        </>
    );
}

export default Home;