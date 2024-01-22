import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import image from '../assets/images/1616766669451.jpg-org'
import image1 from '../assets/images/Sabarmati_Railway_Station.JPG'
import image2 from '../assets/images/Hotel-Leela-and-railway-station-near-Mahatma-Mandir.-Nirmal.webp'
import image3 from '../assets/images/gita-mandir-bus-9518820.webp'
import image4 from '../assets/images/gandhinagar-bus.jpg'
import image5 from '../assets/images/Sardar-Vallabhbhai-Patel-International-Airport.jpg'

export default function Transportation() {
  return (
    <>
      <Navbar />
      <h1 className="about-heading">Transportation</h1>
      <div className="card-container">
        <div className="cards">
          <img
            // src="keynote-speakers/image-10.png"
            src={image5}
            // alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1> Sardar Vallabhbhai Patel International Airport, Ahmedabad </h1>
            <h4> 15 kms from PDEU
            </h4>
            {/* <p>Dean Placement</p> */}
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="cards">
          <img
            // src="keynote-speakers/image-10.png"
            src={image2}
            // alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>	Gandhinagar Railway Station </h1>
            <h4> 15 kms from PDEU
            </h4>
            {/* <p>Dean Placement</p> */}
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="cards">
          <img
            // src="keynote-speakers/image-10.png"
            src={image1}
            // alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>	Sabarmati Railway Station, Ahmedabad </h1>
            <h4> 16 kms from PDEU
            </h4>
            {/* <p>Dean Placement</p> */}
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="cards">
          <img
            // src="keynote-speakers/image-10.png"
            src={image}
            // alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>	Kalupur Railway station, Ahmedabad </h1>
            <h4> 21 kms from PDEU
            </h4>
            {/* <p>Dean Placement</p> */}
          </div>
        </div>
      </div>


      <div className="card-container">
        <div className="cards">
          <img
            // src="keynote-speakers/image-10.png"
            src={image3}
            // alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>	GitaMandir Bus Station, Ahmedabad</h1>
            <h4> 25 kms from PDEU
            </h4>
            {/* <p>Dean Placement</p> */}
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="cards">
          <img
            // src="keynote-speakers/image-10.png"
            src={image4}
            // alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>	Pathika Bus Station, Gandhinagar</h1>
            <h4> 9 kms from PDEU
            </h4>
            {/* <p>Dean Placement</p> */}
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}