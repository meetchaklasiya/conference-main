import React from "react"
import pdeuimage1 from '../assets/images/pdeu2.jpg'
import pdeuimage2 from '../assets/images/pdeu3.jpg'
import "../assets/css/aboutpdeu.css"

export default function AboutPDEU() {
  return (
    <div>
      <div className="pdeu-img-container">
        <img
          src= {pdeuimage2}
          className="pdeu-img"
          alt="pdeu-img"
        />
      </div>
      <h1 className="about-heading">
        About Pandit Deendayal Energy University
      </h1>
      <div className="about-pdeu-text">
        <p className="about-pdeu">
        Pandit Deendayal Energy University (PDEU) was established through Gujarat Act No. 14 of 2007 on 4 April 2007 at Gandhinagar, Gujarat (State). Based on our teaching and research activities in the energy field, followed by the recommendations made by the Hon. Prime Minister Shri Narendra Modiji, during his VIII PDPU Convocation address on 21 November 2020, changed the name of PDPU to an Energy University. We are very glad to inform you that the Government of Gujarat has published an ordinance in the Government of Gujarat Gazette for renaming PDPU as Pandit Deendayal Energy University (PDEU). PDEU (PDPU) primarily aims to be known as the institution of excellence of the country in Engineering, Management, and Liberal Arts, to develop skilled graduates to work towards nation-building and offers undergraduate, postgraduate, and doctoral programs, and intensive research projects in every branch.      </p>
      </div>

      <div className="about-spt-container">
        <div className="pdeu-img-container">
          <img
            src={pdeuimage1}
            className="pdeu-img"
            alt="pdeu-img"
          />
        </div>
        <p className="about-heading">
          {/* About Department of Petroleum Engineering */}
          <h1> About</h1>
          <h1>
            School of Energy Technology & Department of Petroleum Engineering
          </h1>
        </p>
        <div className="about-pdeu-text">
          <p className="about-pdeu">
          The School of Energy Technology (SOET) was a constituent school of the PDEU. The School of Petroleum Technology (SPT) was established in 2007 with the objective of offering a high-quality academic curriculum in the field of Petroleum Engineering. Over the course of time, the organization expanded its operations into several sectors within the energy industry in order to access a wide range of energy sources. Currently, the educational institution accommodates a total of eight academic departments. The Department of Petroleum Engineering has served as the prominent department of PDEU. The department's robust collaborations with regional government entities, research institutions, and enterprises provide extensive prospects for its students, researchers, and academics to engage in high-quality research, thereby facilitating their professional development and advancement. The department offers a comprehensive curriculum for students interested in petroleum engineering, including a four-year undergraduate degree (B.Tech), a two-year Masters program (M.Tech), and Ph.D programs in several interdisciplinary research fields.

          </p>
        </div>
      </div>
    </div>
  )
}
