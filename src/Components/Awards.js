import React, {useState, useEffect} from "react"
import "../assets/css/Awards.css"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../assets/css/Awards.css"
import akshardham from '../assets/images/akshardham_temple.png'
import dwarka from '../assets/images/dwarka.png'
import gir from '../assets/images/git_national_park.png'
import ranikivav from '../assets/images/rani_ki_vav.png'
import unity from '../assets/images/statue_of_unity.png'
import { FaEnvelope, FaPhone } from "react-icons/fa"
const Awards = () => {
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      })

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=f4f824db72fed3d0cd540959e9d54fd2`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result)
          console.log(result)
        })
    }
    fetchData()
  }, [lat, long])

  return (
    <>
      <Navbar />

      <div className="Places">
        <h1 className="heading">Tours</h1>
        <div className="images">
          <img src={akshardham} alt="akshardham-temple"  className="image"/>
          <img src={ranikivav} alt="rani-ki-vav" className="image" />
          <img src={unity} alt="statue-of-unity"  className="image"/>
          <img src={gir} alt="gir-national-park" className="image" />
          <img src={dwarka} alt="dwarka" />
        </div>
        
      </div>
      {/* <div className="weather-section">
        <h1>Current Weather</h1>
        <div className="weather-container">
          {(typeof data.main != 'undefined') ? (
            <Weather weatherData={data}/>
          ): (
            <div></div>
          )}
        </div>
      </div> */}
      <div className="map-title">
        <h1>Maps</h1>
      </div>
      <div className="mapouter ">
      <div className="map-container">
  <iframe
    className="map-iframe"
    src="https://maps.google.com/maps?q=Pandit%20Deendayal%20Energy%20University&t=&z=13&ie=UTF8&iwloc=&output=embed"
    frameBorder="0"
    scrolling="no"
    marginHeight="0"
    marginWidth="0"
  />
  {/* check */}
          <br />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".mapouter{position:relative;text-align:right;height:900px;width:1500px;margin : auto;}",
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".gmap_canvas {overflow:hidden;background:none!important;height:900px;width:1500px;}",
            }}
          />
        </div>
      </div>
      <div className="contact">
          <h1>Contact Us at</h1>
          <p> <FaEnvelope /> icoges@pdpu.ac.in </p>
          <div className="phone-number">

          <p> <FaPhone /> +91 7477593900 </p>
          <p> +91 8051050067</p>
          <p> +919555578820</p>
          </div>

        </div>
      <Footer />
    </>
  )
}

export default Awards
