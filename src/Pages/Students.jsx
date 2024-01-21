import React from "react";
import Navbar from '../Components/Navbar.js';
import Footer from "../Components/Footer.js";
import logo1 from "../assets/images/Logos/Supporting Organizations/FIPI india.png"
import logo2 from "../assets/images/Logos/Supporting Organizations/SEGSPGEAGE logo COLOUR New copy.png"
import logo3 from "../assets/images/Logos/Supporting Organizations/Society_of_Petroleum_Engineers_Logo.svg.png"
import logo4 from '../assets/images/Logos/Supporting Organizations/IADC logo.png'
import '../assets/css/students.css'

const Students = () => {
    return (
        <>
            <Navbar />
            <div className="subheading">
                <h3>Students</h3>
                <div className="flex">
                    <div className="fipi">
                        <section className="px">
                            <img src={logo1} className="fipi-img" />
                            <h3 className="name-chapter">Daksh Joshi</h3>
                            <h3 className="name-chapter" style={{ marginBottom: '45px' }}>Urvil Patel</h3>
                        </section>
                    </div>
                    <div className="seg">
                        <section className="px">
                            <img src={logo2} className="seg-img" />
                            <h3 className="name-chapter">Megh Soni</h3>
                            <h3 className="name-chapter" style={{ marginBottom: '45px' }}>Deep Khanpara</h3>
                        </section>
                    </div>
                    <div className="spe">
                        <section className="px">
                            <img src={logo3} className="spe-img" />
                            <h3 className="name-chapter">Pratham Yadav</h3>
                            <h3 className="name-chapter" style={{ marginBottom: '45px' }}>Kanchal Soni</h3>
                        </section>
                    </div>
                    <div className="iadc">
                        <section className="px">
                            <img src={logo4} className="iadc-img" />
                            <h3 className="name-chapter">Harsh Patni</h3>
                            <h3 className="name-chapter" style={{ marginBottom: '45px' }}>Tithee Bhavsar</h3>
                        </section>
                    </div>
                </div>
                <div>
                    <h3 className="name-chapter" style={{ marginBottom: '45px' }}>Meet Chaklasiya</h3>
                    <h3 className="name-chapter" style={{ marginBottom: '45px' }}>Isacc Wilson</h3>
                    <h3 className="name-chapter" style={{ marginBottom: '45px' }}>Nguessan Kouassi Jean Patrick</h3>
                    <h3 className="name-chapter" style={{ marginBottom: '45px' }}>Ali Almohammed</h3>
                    <h3 className="name-chapter" style={{ marginBottom: '45px' }}>Pawan Kumar Tripathi</h3>
                    <h3 className="name-chapter" style={{ marginBottom: '45px' }}>Husam Mohammed Saleh Alziyadi</h3>
                    <h3 className="name-chapter" style={{ marginBottom: '45px' }}>Konan Kouassi Salomon</h3>
                    <h3 className="name-chapter" style={{ marginBottom: '45px' }}>Daivom Joshi</h3>
                    <h3 className="name-chapter" style={{ marginBottom: '45px' }}>Vatsal Patel</h3>
                    <h3 className="name-chapter" style={{ marginBottom: '45px' }}>Devarsh Soni</h3>
                    <h3 className="name-chapter" style={{ marginBottom: '45px' }}>Chimakurti Prakash</h3>
                </div>




            </div>
            <Footer />
        </>
    );
}

export default Students;