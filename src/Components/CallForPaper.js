import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../assets/css/callforpaper.css"

export default function CallForPaper() {
  return (
    <div>
      <Navbar />
      <h1 className="callforpaper-heading">Call for Papers</h1>
      <div className="text-container">
        <p><b>Abstract submission guidelines:</b></p>
        <p>The abstract of the paper should concisely articulate the contextual framework and purpose of the study, provide a succinct overview of the methodology employed, present preliminary findings, and emphasize noteworthy aspects of the research. The abstract should be constrained to a maximum of 300 words. </p>
        <p><b>Paper Submission guidelines:</b></p>
        <p>The abstract may be submitted using Google Form given on the website. The submitted abstract will undergo evaluation by the technical committee. All abstracts that are deemed acceptable will be incorporated into the electronic proceedings of the conference.  </p>
        {/* <img src="ijhe.jpeg" alt="ijhe" />
        <p className="callforpaper-text">
          The selected papers will be published in <br />
          <a href="https://www.journals.elsevier.com/international-journal-of-hydrogen-energy/call-for-papers/1st-international-conference-on-green-hydrogen-for-global-de-carbonization">
            {" "}
            "International Journal of Hydrogen Energy."
          </a>{" "}
          <br />
          (Impact Factor: 7.1)
        </p> */}
      </div>

      <div>
  <h1 className="callforpaper-heading">Advertisement in the Abstract Book</h1>
  <p className="imp-dates">An Abstract Book will be published on this occasion. Advertisements are invited, for which the tariffs are:</p>
  <table>
    <thead>
      <tr>
        <th>S.No.</th>
        <th>Category</th>
        <th>Amount(INR)</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Back Cover(color)</td>
        <td>75000</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Front Inside(color)</td>
        <td>50000</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Back inside(color)</td>
        <td>40000</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Full Page(color)</td>
        <td>30000</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Full Page (B&W)</td>
        <td>25000</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Half Page(color)</td>
        <td>20000</td>
      </tr>
    </thead>
  </table>
</div>

      <p className="">
       <h1 className="callforpaper-heading">Important Dates</h1> 
       <div className="imp-dates">
       <p>Call for Abstracts deadline: 23 Jan 2024</p>
      <p>Acceptance notification: 25 Jan 2024</p>
      <p>Early registration deadline: 30 Jan 2024</p>
      <p>Regular registration deadline: 10 Feb 2024</p>
      <p>Conference dates:  16 and 17 Feb 2024</p>
       </div>

      </p>
      <div className="button-container">
        <button className="callforpaper-button">
          <a href="https://docs.google.com/document/d/167ZOWSIqjOdUNWYpsyNI-2eZU_OG1Nof/edit?usp=sharing&ouid=109618269804736174356&rtpof=true&sd=true">Download the abstract template</a>
        </button>
      </div>

      <p className="mail-text">
        Please submit your abstracts to <a href="https://forms.gle/RGKr3ohGs978TbkRA"> Google Form</a>
      </p>
      <Footer />
    </div>
  )
}
