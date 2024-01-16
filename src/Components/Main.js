import React from "react"
import "../assets/css/main.css"
import img from '../assets/images/Logos-old/logo-2.jpeg'
import img2 from '../assets/images/Logos-old/logo-3.jpeg'
import img3 from '../assets/images/Logos-old/logo-4.jpeg'
import img4 from '../assets/images/Logos-old/logo-5.jpeg'
import logo from '../assets/images/pdeu-logo.png'
import img5 from '../assets/images/Logos-old/mat-corr.jpeg'

export default function Main() {
  return (
    <div className="main">
      {/* <div className="main-text-container">
        <h1 className="main-heading">
          Green Hydrogen for Global Decarbonization
        </h1>
        <p className="main-desc">
          Green Hydrogen is expected to become a $ 12-15 trillion global
          industry by 2050. Green Hydrogen has the potential to become a vital
          component of the energy mix in the next few decades that has captured
          a clear investor interest.
          <br />
          The first International Hydrogen Energy & Economy conference which is
          being organised by the Catalysis & Hydrogen Research lab from school
          of petroleum technology in Pandit Deendayal Energy University,
          Gandhinagar, Gujarat.
        </p>
      </div>
      <div className="heading-container"> */}
      {/* <div className="card">Thrust Areas</div>
        <div className="card">Objectives & Outcomes</div>
        <div className="card">Organizing Committee</div>
        <div className="card">Fees & Important Dates</div>
        <div className="card">About Us</div> */}
      {/* <p>Green Hydrogen</p>
      </div> */}
      <div className="HeroSection">
        <p className="MainHeading1">
          International Conference on Oil & Gas for Energy Security
          {/* </p> */}
          {/* <p className="MainHeading2"> */}
        </p>
        <p className="SecondSmallText">
          ICOGES 2024
        </p>
        {/* <p className="ThirdSmallText">
          Pandit Deendayal Energy University
          <br />
          Gandhinagar, 
          Gujarat, <br /> India
        </p> */}
        <section className="logo-section-home">
          <section className="organized-by">
            <p>Organized By</p>
            <h3>Department of Petroleum Engineering</h3>
            <img src={logo} />
            <h3>Pandit Deendayal Energy University</h3>
            <h3>Gandhinagar</h3>
          </section>
        </section>
      </div>
    </div>
  )
}
