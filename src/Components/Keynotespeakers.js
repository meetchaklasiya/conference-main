import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../assets/css/section_2.css"
import image from '../assets/images/keynote-speakers/Dr Prashant Jadhawar.jpg'
import image2 from '../assets/images/keynote-speakers/Srikanta Mishra.jpg'
import image3 from '../assets/images/keynote-speakers/Subrata Borgohain Gogoi cropped.jpg'
import image4 from '../assets/images/keynote-speakers/image-12.jpg'
import image5 from '../assets/images/keynote-speakers/image-13.jpg'
import image6 from '../assets/images/keynote-speakers/image-14.jpg'

export default function Keynote() {
  return (
    <div>
      <Navbar />
      {/* <div className="heading"> Keynote Speakers</div> */}

      <div className="card-container">

        <div className="cards">
          <img
            // src="keynote-speakers/image-10.png"
            src='keynote-speakers/srikanta.png'
            // alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>	Prof. Srikanta Mishra </h1>
            <h4> Harold Vance Department of Petroleum Engineering, Texas A&M University, USA
            </h4>
            {/* <p>Dean Placement</p> */}
          </div>
        </div>

        {/* <div className="cards">
          <div className="img-container">
            <img
              src="keynote-speakers/image-3.png"
              alt="speaker"
              className="speaker-img"
            />
          </div>
          <div className="speaker-information">
            <h1>Prof. Subrata Borgohain Gogoi </h1>
            <h4>
            Department of Petroleum Technology, Dibrugarh University, Assam, India.
            </h4>
          </div>
        </div> */}
        
        
        



       

        


        {/* <div className="cards">
           <img
             src="keynote-speakers/image-6.png"
             alt="speaker"
             className="speaker-img"
           />
          <div className="speaker-information">
             <h1>Prof. Damaraju</h1>
             <h2>ONGC Energy Center, Faridabad</h2>
             <p>Some text</p>
           </div>
         </div> */}
      </div>
      <Footer />
    </div>

  )
}
