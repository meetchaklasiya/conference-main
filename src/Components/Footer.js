import React from "react"
import "../assets/css/footer.css"
import {BiCopyright} from "react-icons/bi"
import {FaTwitter} from "react-icons/fa"
import {ImLinkedin2} from "react-icons/im"
import {ImFacebook} from "react-icons/im"

export default function Footer() {
  return (
    <div>
      <div className="footer-p2">
        <div className="parts">
          <ul>
            <li>
            {/* INTERNATIONAL CONFERENCE ON OIL & GAS FOR ENERGY SECURITY */}
            </li>
          </ul>
        </div>
        <div className="parts_l">
          <ul>
    
            <li>
              <a href="/#/sponsorship">SPONSORSHIP </a>
            </li>
          </ul>
        </div>

        <div className="parts_l">
          <ul>
            <li>
              <a href="/#/registration">
                REGISTRATION
              </a>
              </li>
            {/* <li>Sponsor</li> */}
          </ul>
        </div>

        <div className="parts_l">
          <ul>
            <li>
              <a href="/#/callforpapers">
                CALL FOR PAPERS
              </a>
              </li>
            
          </ul>
        </div>

        <div className="parts_l">
          <ul>
            <li>
              <a href="/#/importantdates">
                IMPORTANT DATES
              </a>
              </li>
            
          </ul>
        </div>
       
      </div>
      <div className="footer-p1">
        <div className="conf">
          <div className="foot-topic">
            <BiCopyright />
            ICOGES-24
          </div>
          <div className="medias">
            <ul className="connect">
              <li>Connect with us</li>
              <li className="lnks">
                <a href="/">
                  <FaTwitter />
                </a>
              </li>
              <li className="lnks">
                <a href="/">
                  <ImLinkedin2 />
                </a>
              </li>
              <li className="lnks">
                <a href="/">
                  <ImFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="made-by-encode">
          <p>Made with love & expertise by Encode, Parth Shukla, Meet Chaklasiya, Daksh Joshi</p>
      </div>
    </div>
  )
}
