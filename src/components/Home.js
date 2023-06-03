import React from "react";
import Header from "./Header";
import SignInModal from "./SignInModal";
import Footer from "./Footer";
function Home(){
    return(
        <div>
            <Header />
        <SignInModal></SignInModal>
        <Footer />
        </div>
    );
}
export default Home