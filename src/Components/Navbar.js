import React, { useState, useEffect } from "react"
import logo from "../assets/images/pdeu-logo.png";
import logo1 from "../assets/images/conf-logo.png";
import SOET from '../assets/images/Logos-old/SOET.jpeg';
// import logo2 from "../assets/images/logo2.png"
import "../assets/css/navbar.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faEnvelope, faFileAlt, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Theme from "./Theme"
import Marquee from "react-fast-marquee"
import Update from "./Update"
import axios from "axios"
import file from '../assets/data/Brochure.pdf'

// import { useRef,useEffect } from "react"
export default function Navbar() {
  // const [fetchedData, setFetchedData] = useState([])
  // useEffect(() => {
  //   axios
  //     // This is for local development
  //     // .get("http://localhost:5000/api/v1/updates")

  //     // This is for production
  //     .get("https://conferenceapi.onrender.com/api/v1/updates")
  //     .then((res) => {
  //       // console.log(res.data)
  //       setFetchedData(res.data)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])

  // const hamburgerr = document.querySelector(".hamburger")
  // const navMenu = document.querySelector(".nav-main-menu")
  // const [switchToggled, setSwitchToggled] = useState(false)
  // const ToggleSwitch = () => {
  //   switchToggled ? setSwitchToggled(false) : setSwitchToggled(true)
  //   if (switchToggled === true) {
  //     hamburgerr.classList.toggle("active")
  //     navMenu.classList.toggle("active")
  //   } else {
  //     hamburgerr.classList.toggle("active")
  //     navMenu.classList.toggle("active")
  //   }
  // }

  //this below is the old toggle
  // const toggle = () => {
  //     hamburgerr.classList.toggle("active");
  //     navMenu.classList.toggle("active");

  //  };

  const hamburgerr = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-main-menu")
  const [switchToggled, setSwitchToggled] = useState(false)
  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true)
    if (switchToggled === true) {
      hamburgerr.classList.toggle("active")
      navMenu.classList.toggle("active")
    } else {
      hamburgerr.classList.toggle("active")
      navMenu.classList.toggle("active")
    }
  }

  // function to downloadpdf when button is clicked 
  // const handleDownload = () => {
  //   // Replace 'your-pdf-file.pdf' with the actual path or URL of your PDF file
  //   const pdfUrl = 'https://f005.backblazeb2.com/file/ICOGES-Conference/Brochure+ICOGES-2024.pdf';

  //   // Create a temporary link element
  //   const link = document.createElement('a');
  //   link.href = pdfUrl;
  //   link.download = 'ICOGES-Brochure.pdf'; // Specify the name for the downloaded file

  //   // Append the link to the body
  //   document.body.appendChild(link);

  //   // Trigger the click event on the link
  //   link.click();

  //   // Remove the link from the DOM
  //   document.body.removeChild(link);
  // };

  return (
    <div className="header">
      <div className="most-upper">
        <section className="upper-link">
          <p><FontAwesomeIcon icon={faEnvelope} className="email-icon" /></p>
          <a href="mailto:icoges@pdpu.ac.in" target="_BLANK">
            <button className="button-85">
              <p>icoges@pdpu.ac.in</p>
            </button>

          </a>

        </section>
        <section className="upper-link">
          <p><FontAwesomeIcon icon={faFileAlt} className="document-icon" /> </p>
          <a href="https://f005.backblazeb2.com/file/ICOGES-Conference/Brochure+ICOGES-2024.pdf" target="_blank">
            <button className="button-85">
              <p>Download Brochure Here</p>
            </button>

          </a>
        </section>
        <section className="upper-link">
            <p> <FontAwesomeIcon icon={faCalendar} /></p>
          <a href="/#/importantdates">
            <button className="button-85">
              <p>Important Dates</p>
            </button>
          </a>
        </section>
        
        
      </div>
      <div>
        <div className="header-1">
          <section className="header-inner-section">
            <Link to="/"><img className="icghd-logo" src={logo1} alt="Logo2" /></Link>
            
            <p className='text-upper'>
              <span>ICOGES 2024 | </span>
              <span>16 - 17 February 2024</span>
            </p>
          </section>
          <section className="logos-section">
            <a href="/">
              <img className="pdeu-logo" src={logo} alt="Logo" />
            </a>
            
            <img className="pdeu-logo" src={SOET} alt="SOET-Logo" />
          </section>
        </div>
      </div>

      <nav className="navbar">
        {/* <div className="logo">
          <div className="logo-container">
          </div>
        </div> */}
        <div className="links">
          {/* <ul className="nav-up">
            <li>
              <Link to="/commingsoon" className="upLinks">
                SPONSOR
              </Link>
            </li>
            <li>
              <Link to="/commingsoon" className="upLinks">
                REGISTER
              </Link>
            </li>
          </ul> */}

          <ul className="nav-main-menu">
              
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <li class="dropdown">
                <div class="dropbtn">
                  ABOUT CONFERENCE
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="down-arrow-icon"
                  />
                </div>
                <div class="dropdown-content">
                  <Link to="/ICOGES" className="nav-link">
                    ICOGES 2024
                  </Link>
                  <Link to="/themes" className="nav-link">
                    Theme of the Conference
                  </Link>
                </div>
              </li>
            </li>
              
            {/* <li className="nav-item">
              <Link to="/themes" className="nav-link">
                THEME
              </Link>
            </li> */}
            <li className="nav-item">
              <li class="dropdown">
                <div class="dropbtn">
                  COMMITTEE
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="down-arrow-icon"
                  />
                </div>
                <div class="dropdown-content">
                  <Link to="/Management" className="nav-link">
                    Management
                  </Link>
                  <Link to="/organizing" className="nav-link">
                    Organizing Committee
                  </Link>
                  <Link to="/international" className="nav-link">
                    International Advisory committee
                  </Link>
                  <Link to="/national" className="nav-link">
                    National Advisory Committee
                  </Link>
                  <Link to="/students" className="nav-link">
                    Students
                  </Link>
                </div>
              </li>
            </li>
              
            
            {/* <li className="nav-item">
              <Link to="/keynotespeakers" className="nav-link">
                KEYNOTE SPEAKERS
              </Link>
            </li> */}
            <li className="nav-item">
              <li class="dropdown">
                <div class="dropbtn">
                  SPEAKERS
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="down-arrow-icon"
                  />
                </div>
                <div class="dropdown-content">
                  {/* <Link to="/Planary" className="nav-link">
                    Planary Talks
                  </Link> */}
                  <Link to="/Keynote" className="nav-link">
                    
                    Planary Speakers
                  </Link>
                  <Link to="/keynotespeakerpdeu" className="nav-link">
                    Key Note Speaker
                  </Link>
                  <Link to="/sessions" className="nav-link">
                    Session-lead lectures
                  </Link>
                  {/* <Link to="/Presentors" className="nav-link">
                    Oral Presentaions
                  </Link>
                  <Link to="/OralPresentors" className="nav-link">
                    Poster Presentaions
                  </Link> */}
                </div>
              </li>
            </li>
              
            
            <li className="nav-item">
              {/* <div className="dropdown">
                <button className="dropdown-button">
                  For Authors
                </button>
                <div className="dropdown-content">
                <Link to="/callforpapers" className="nav-link">
                  CALL FOR PAPER
                </Link>
                <Link to="/registration" className="nav-link">
                  REGISTRATION
                </Link>
                </div>
              </div> */}
              <li class="dropdown">
                <div class="dropbtn">
                  FOR AUTHORS
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="down-arrow-icon"
                  />
                </div>
                <div class="dropdown-content">
                  <Link to="/callforpapers" className="nav-link">
                    CALL FOR PAPER
                  </Link>
                  <Link to="/registration" className="nav-link">
                    REGISTRATION
                  </Link>
                </div>
              </li>
            </li>
            {/* <li className="nav-item">
              <Link to="/news" className="nav-link">
                NEWS
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/sponsorship" className="nav-link">
                SPONSORSHIP
              </Link>
            </li>
            <li className="nav-item">
              {/* <div className="dropdown">
                <button className="dropdown-button">
                  For Authors
                </button>
                <div className="dropdown-content">
                <Link to="/callforpapers" className="nav-link">
                  CALL FOR PAPER
                </Link>
                <Link to="/registration" className="nav-link">
                  REGISTRATION
                </Link>
                </div>
              </div> */}
              <li class="dropdown">
                <div class="dropbtn">
                  MORE
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="down-arrow-icon"
                  />
                </div>
                <div class="dropdown-content">
                  <Link to='/transportation' className="nav-link">TRANSPORTATION</Link>
                  <Link to="/Accommodation" className="nav-link">
                    ACCOMMODATION
                  </Link>
                  <Link to='/Awards' className="nav-link">PLACES TO VISIT</Link>
                  <Link to="/contact" className="nav-link">
                    CONTACT US
                  </Link>
                </div>
              </li>
            </li>
          </ul>
        </div>

        <div id="hamburger" className="hamburger" onClick={ToggleSwitch}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* <Marquee gradient={false} style={{color: "white"}}>
        {fetchedData.map((data) => (
          <Update key={data._id} update={data.update} />
        ))}
      </Marquee> */}
    </div>
  )
}
