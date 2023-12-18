import React  from "react";
import Header from "../layouts/home/Header";
import Main   from "../layouts/home/Main";
import Footer from "../layouts/home/Footer";

const Home = () => {
    return (
        <div className="wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}
export default Home;