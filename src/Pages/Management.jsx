import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Management = () => {
    return (
        <>
            <Navbar />
            
            <div className="Page-title">
                <h2>Management</h2>
                <div className="names">
                    <h4>CHIEF-PATRON</h4>
                    Prof. S. Sundar Manoharan
                    <br />
                    Director General, PDEU
                </div>
                <div className="names">
                    <h4>PATRONS</h4>
                    Prof. Anirbid B Sircar,
                    <br />
                    Director, SoET, PDEU
                    <br />
                    <p></p>
                    Col. (Dr.) Rakesh Kumar Shrivastawa
                    <br />
                    Registrar, PDEU
                </div>
                <div className="names">
                    <h4>CHAIRS</h4>
                    Dr. Uttam Kumar Bhui,
                    <br />
                    HOD-PE, SoET, PDEU
                    <br />
                    <p></p>
                    Dr. Bhawanisingh Desai, <br />
                    Dean R&D, PDEU
                </div>
                <div className="names">
                    <h4>CONVENER</h4>
                    Dr. Achinta Bera,
                    <br />
                    SoET, PDEU
                </div>
                <div className="names">
                    <h4>CO-CONVENER</h4>
                    Dr. Amit Verma,
                    <br />
                    SoET, PDEU
                    <br />
                    Dr. Paul Naveen
                    <br />
                    SoET, PDEU
                </div>
                <div className="names">
                    <h4>TREASURERS</h4>
                    Gaurav Hazarika
                     <br />
                     SoET, PDEU
                     <br />
                     <br />

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Management;
