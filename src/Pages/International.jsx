import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const International = () => {
    return (
        <>
            <Navbar />
            <div className="subheading">
                <h3>International Advisory Committee </h3>
                {/* <div className="subheading-details">
            Dr. Anirbid B Sircar, <br />
            <h3 className="committe-location">Director, SOET, PDEU</h3>
          </div> */}
                <div className="subheading-details">
                Dr. Hadi Belhaj, <br />
                    <h3 className="committe-location">Khalifa University, UAE</h3>
                </div>
                <div className="subheading-details">
                Dr. Emad W. Al-Shalabi, <br />
                    <h3 className="committe-location">Khalifa University, UAE</h3>
                </div>
                <div className="subheading-details">
                Prof. Japan Trivedi, <br />
                    <h3 className="committe-location">University of Alberta, Canada</h3>
                </div>
                <div className="subheading-details">
                Prof. Reza Barati, <br />
                    <h3 className="committe-location">Kansas University, USA</h3>
                </div>
                <div className="subheading-details">
                    Dr. Munawar Shaik, <br />
                    <h3 className="committe-location">UAE University, Al-Ain UAE</h3>
                </div>
                <div className="subheading-details">
                    Dr. Francisco Arguelles Vivas, <br />
                    <h3 className="committe-location">ExxonMobil, Texas, USA</h3>
                </div>
                <div className="subheading-details">
                Prof. Stefan Iglauer, <br />
                    <h3 className="committe-location">Edith Cowan University, Australia</h3>
                </div>
                <div className="subheading-details">
                Dr. Ashkan Jahanbani Ghahfarokhi, <br />
                    <h3 className="committe-location"> NTNU Norway</h3>
                </div>
                <div className="subheading-details">
                Prof. Dayanand Saini, <br />
                    <h3 className="committe-location"> California State University, USA</h3>
                </div>
                <div className="subheading-details">
                Dr. Prashant Jadhawar, <br />
                    <h3 className="committe-location"> University of Aberdeen, UK</h3>
                </div>
                <div className="subheading-details">
                Dr. Jyoti Phirani, <br />
                    <h3 className="committe-location">Baker Huges, UK</h3>
                </div>
                <div className="subheading-details">
                Dr. Ali Ghalambor, <br />
                    <h3 className="committe-location">Innovative Petrotech Solutions, Inc.</h3>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default International;