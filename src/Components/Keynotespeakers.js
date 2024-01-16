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
            src={image2}
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
        <div className="cards">
          <div className="img-container">
            <img
              src="keynote-speakers/image-1.png"
              alt="speaker"
              className="speaker-img"
            />
            {/* <div className="img-overlay"></div> */}
          </div>

          <div className="speaker-information">
            <h1>	Prof. Askhan Jahanbani Ghahfarokhi</h1>
            <h4>Department of Petroleum Engineering, NTNU Norway</h4>
            {/* <p>Some text</p> */}
          </div>
        </div>
        <div className="cards">
          <div className="img-container">

          <img
            src="keynote-speakers/image-2.png"
            alt="speaker"
            className="speaker-img"
          />
          </div>
          <div className="speaker-information">
            <h1>	Prof. Sandeep D. Kulkarni</h1>
            <h4>Deysarkar Centre of Excellence in Petroleum Engineering</h4>
            <h4>IIT Kharaghpur, India</h4>
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
        <div className="cards">
          <img
            src="keynote-speakers/image-4.png"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Prof. Himanshu Sharma </h1>
            <h4> Department of Chemical Engineering, IIT Kanpur, India</h4>
            {/* <p>Some text</p> */}
          </div>
        </div>
        <div className="cards">
          <img
            src="keynote-speakers/image-5.png"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Prof. Pankaj Khanna</h1>
            <h4>Department of Earth Science, IIT Gandhinagar, India</h4>
            {/* <p>Some text</p> */}
          </div>
        </div>
        <div className="cards">
          <img
            src="keynote-speakers/image-6.png"
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>Prof. Anirbid Sircar</h1>
            <h4>Pandit Deendayal Energy University, Gandhinagar, India  </h4>
            {/* <p>Pandit Deendayal Energy University </p> */}
          </div>
        </div>
        <div className="cards">
          <img
            src="keynote-speakers/image-8.png "
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>	Prof. Anugrah Singh</h1>
            <h4>Department of Chemical Engineering, IIT Guwahati, India</h4>
            {/* <p>Dean Placement</p> */}
          </div>
        </div>
        <div className="cards">
          <img
            src="keynote-speakers/image-9.png "
            alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>	Prof. Prem Bikkina </h1>
            <h4>Department of Chemical Engineering, Oklahoma State University, USA</h4>
            {/* <p>Dean Placement</p> */}
          </div>
        </div>
        <div className="cards">
          <img
            // src="keynote-speakers/image-10.png"
            src={image}
            // alt="speaker"
            className="speaker-img"
          />
          <div className="speaker-information">
            <h1>	Prof. Prashant Jadhawar </h1>
            <h4> Department of Petroleum Engineering, University of Aberdeen, UK
          </h4>
            {/* <p>Dean Placement</p> */}
          </div>
        </div>

        

        <div className="cards">
          <img
            // src="keynote-speakers/image-10.png"
            src={image3}
            // alt="speaker"
            className="speaker-img-new"
          />
          <div className="speaker-information">
            <h1>	Prof. Subrata Borgohain Gogoi </h1>
            <h4> Department of Petroleum Technology, Dibrugarh University, Assam, India
          </h4>
            {/* <p>Dean Placement</p> */}
          </div>
        </div>


        <div className="cards">
          <img
            // src="keynote-speakers/image-10.png"
            src={image4}
            // alt="speaker"
            className="speaker-img-new"
          />
          <div className="speaker-information">
            <h1>	Prof. Samarth Patwardhan </h1>
            <h4> Department of Petroleum Engineering, MIT-World Peace University, Pune, India
          </h4>
            {/* <p>Dean Placement</p> */}
          </div>
        </div>


        <div className="cards">
          <img
            // src="keynote-speakers/image-10.png"
            src={image5}
            // alt="speaker"
            className="speaker-img-new"
          />
          <div className="speaker-information">
            <h1>	Prof. Rakesh Kumar Vij </h1>
            <h4> Department of Petroleum Engineering, Pandit Deendayal Energy University, Gandhinagar, India
          </h4>
            {/* <p>Dean Placement</p> */}
          </div>
        </div>


        <div className="cards">
          <img
            // src="keynote-speakers/image-10.png"
            src={image6}
            // alt="speaker"
            className="speaker-img-new"
          />
          <div className="speaker-information">
            <h1>	Prof. Bhawanisingh Desai </h1>
            <h4> Department of Petroleum Engineering, Pandit Deendayal Energy University, Gandhinagar, India
          </h4>
            {/* <p>Dean Placement</p> */}
          </div>
        </div>
        

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
