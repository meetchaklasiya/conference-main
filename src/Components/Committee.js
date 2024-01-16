import React from "react"
import Navbar from "./Navbar"
// import Footer from './Footer'
import ".././assets/css/committee.css"
import Footer from "./Footer"
const Committee = () => {
  return (
    <div>
      <Navbar />
      <div className="committeewrap">
          <h3 className="title-subheading">Organizing Committee</h3>
        <div className="Page-title">
          <div className="names">
            <h4>CHIEF-PATRON</h4>
            Prof. S. Sundar Manoharan
            <br />
            Director General, PDEU
          </div>
          <div className="names">
            <h4>PATRONS</h4>
            Prof. Anirbid B Sircar,
            <br />
            Director, SOET, PDEU
            <br />
            <p></p>
            Col (Dr) Rakesh Kumar Shrivastawa
            <br />
            Registrar, PDEU
          </div>
          <div className="names">
            <h4>CHAIRS</h4>
            Dr. Uttam Kumar Bhui,
            <br />
            HOD PE, SOET, PDEU
            <br />
            <p></p>
            Dr. Bhawanisingh Desai, <br />
            Dean R & D, PDEU
          </div>
          <div className="names">
            <h4>CONVENER</h4>
            Dr. Achinta Bera,
            <br />
            SOET, PDEU
          </div>
          <div className="names">
            <h4>CO-CONVENER</h4>
            Dr. Amit Verma,
            <br />
            SOET, PDEU
            <br />
            Dr. Paul Naveen
            <br />
            SoET, PDEU
          </div>
          <div className="names">
            <h4>TREASURERS</h4>
            Gaurav Hazarika
          </div>
        </div>

        <div className="subheading">
          <h3>Organizing Committee Members </h3>
          <div className="subheading-details">
          Dr. Achinta Bera, <br />
            <h3 className="committe-location">PDEU</h3>
          </div>
          <div className="subheading-details">
          Dr. Amit Verma, <br />
            <h3 className="committe-location">PDEU</h3>
          </div>
          <div className="subheading-details">
          Dr. Paul Naveen, <br />
            <h3 className="committe-location">PDEU</h3>
          </div>
          <div className="subheading-details">
          Dr. N Madhavan <br />
            <h3 className="committe-location">PDEU</h3>
          </div>
          <div className="subheading-details">
          Dr. P Sivakumar <br />
            <h3 className="committe-location">PDEU</h3>
          </div>
          <div className="subheading-details">
          Dr. Rohit Srivastava, <br />
            <h3 className="committe-location">PDEU</h3>
          </div>
          <div className="subheading-details">
          Dr. Ragunathan Balasubramanian, <br />
            <h3 className="committe-location">PDEU</h3>
          </div>
          <div className="subheading-details">
          Dr. Vivek Ramalingam, <br />
            <h3 className="committe-location">PDEU</h3>
          </div>
          <div className="subheading-details">
          Dr. Shanker Krishna <br />
            <h3 className="committe-location">PDEU</h3>
          </div>
          <div className="subheading-details">
          Dr. Lakshmanarao Jeeru, <br />
            <h3 className="committe-location">
            PDEU
            </h3>
          </div>
          {/* <div className="subheading-details">
            Prof. Pravin Linga, <br />
            National University of Singapore, SG
          </div> */}
          <div className="subheading-details">
          Dr. Hari Srinivasan, <br />
            <h3 className="committe-location">
              PDEU
            </h3>
            <div className="subheading-details">
            Dr. Maunish Shah, <br />
              <h3 className="committe-location">
                PDEU
              </h3>
            </div>
            <div className="subheading-details">
            Dr. Namrata Bist, <br />
              <h3 className="committe-location">
                PDEU
              </h3>
            </div>
          </div>
          <div className="subheading-details">
          Mr. Gaurav Hazarika, <br />
            PDEU
          </div>
        </div>

        <div className="subheading">
          <h3>Advisory Committee Members </h3>
          {/* <div className="subheading-details">
            Dr. Anirbid B Sircar, <br />
            <h3 className="committe-location">Director, SOET, PDEU</h3>
          </div> */}
          <div className="subheading-details">
          Col (Dr) Rakesh Kumar Shrivastawa, <br />
            <h3 className="committe-location">Registrar, PDEU</h3>
          </div>
          <div className="subheading-details">
          Dr. Anirbid Sircar, <br />
            <h3 className="committe-location">Director, SoET, PDEU</h3>
          </div>
          <div className="subheading-details">
          Dr. Hadi Belhaj, <br />
            <h3 className="committe-location">Khalifa University, UAE</h3>
          </div>
          <div className="subheading-details">
          Prof. Reza Barati, <br />
            <h3 className="committe-location">Kansas University, USA</h3>
          </div>
          <div className="subheading-details">
          Dr. Emad W. Al-Shalabi, <br />
            <h3 className="committe-location">Khalifa University, UAE</h3>
          </div>
          <div className="subheading-details">
          Dr. Munawar Shaik, <br />
            <h3 className="committe-location">UAE University, Al-Ain UAE</h3>
          </div>
          <div className="subheading-details">
          Dr. Anand Gupta , <br />
            <h3 className="committe-location">ONGC India </h3>
          </div>
          <div className="subheading-details">
          Dr. Ashkan Jahanbani Ghahfarokhi, <br />
            <h3 className="committe-location">NTNU Norway</h3>
          </div>
          <div className="subheading-details">
          Dr. Francisco Arguelles Vivas, <br />
            <h3 className="committe-location">ExxonMobil, Texas, USA</h3>
          </div>
          <div className="subheading-details">
          Mr. Sujit Mitra, <br />
            <h3 className="committe-location">IRS, ONGC India</h3>
          </div>
          <div className="subheading-details">
          Prof. Suryendu Dutta , <br />
            <h3 className="committe-location">IIT Bombay</h3>
          </div>
          <div className="subheading-details">
          Prof. Dhaval Pujara, <br />
            <h3 className="committe-location">Director, SoT, PDEU</h3>
          </div>
          <div className="subheading-details">
          Dr. Praghnesh Bhatt, <br />
            <h3 className="committe-location">Dean, SoET, PDEU</h3>
          </div>
          <div className="subheading-details">
          Prof. S. S. Kachhwaha, <br />
            <h3 className="committe-location"> Dean, SoT, PDEU</h3>
          </div>
          <div className="subheading-details">
          Dr. Bhawanisingh Desai, <br />
            <h3 className="committe-location"> Dean-R&D, PDEU</h3>
          </div>
          <div className="subheading-details">
          Prof. Vishvesh J Badheka, <br />
            <h3 className="committe-location"> Dean-Academic Affairs, PDEU</h3>
          </div>
          <div className="subheading-details">
          Dr. Rajesh Patel, <br />
            <h3 className="committe-location">Dean-Admissions, PDEU </h3>
          </div>
          <div className="subheading-details">
          Prof. Nigam Dave, <br />
            <h3 className="committe-location"> Director, SLS, PDEU</h3>
          </div>
          <div className="subheading-details">
          Dr. Ritu Sharma, <br />
            <h3 className="committe-location"> Dean, FoLS, PDEU </h3>
          </div>
          <div className="subheading-details">
          Prof. T.P Singh, <br />
            <h3 className="committe-location">  Dean-Student Affairs, PDEU</h3>
          </div>



          <div className="subheading-details">
          Prof. R.K. Vij, <br />
            <h3 className="committe-location"> Dean-Placement, PDEU</h3>
          </div>
          <div className="subheading-details">
          Dr. Uttam Bhui, <br />
            <h3 className="committe-location"> HoD-Petroleum Eng., PDEU</h3>
          </div>
          <div className="subheading-details">
          Prof. Anugrah Singh, <br />
            <h3 className="committe-location">IIT-Guwahati, India </h3>
          </div>
          <div className="subheading-details">
          Dr. Pankaj Khanna, <br />
            <h3 className="committe-location"> IIT Gandhinagar, India</h3>
          </div>
          <div className="subheading-details">
          Dr. Vikram Vishal, <br />
            <h3 className="committe-location"> IIT Bombay</h3>
          </div>
          <div className="subheading-details">
          Prof. Jitendra Sangwai, <br />
            <h3 className="committe-location">IIT Madras</h3>
          </div>



          <div className="subheading-details">
          Prof. Ajay Mandal, <br />
            <h3 className="committe-location"> IIT(ISM) Dhanbad</h3>
          </div>
          <div className="subheading-details">
          Prof. Keka Ojha, <br />
            <h3 className="committe-location"> IIT(ISM) Dhanbad</h3>
          </div>
          <div className="subheading-details">
          Prof. Satish Kumar Sinha, <br />
            <h3 className="committe-location">RGIPT India</h3>
          </div>
          <div className="subheading-details">
          Dr. Sandeep Kulkarni, <br />
            <h3 className="committe-location"> IIT Kharagpur</h3>
          </div>
          <div className="subheading-details">
          Dr. Himanshu Sharma, <br />
            <h3 className="committe-location"> IIT Kanpur</h3>
          </div>
        </div>
       
        <div className="subheading">
          <h3>Students</h3>
          <div className="subheading-details">
            <h3 className="committe-location">Isaac Wilson</h3>
          </div>
          <div className="subheading-details">
            <h3 className="committe-location">Nguessan Kouassi Jean Patrick</h3>
          </div>
          <div className="subheading-details">
            Prof. T.P Singh, <br />
            <h3 className="committe-location">Dean Student Affairs, PDEU Gandhinagar</h3>
          </div>
          <div className="subheading-details">
            Prof. Surendra Singh Kachhwaha, <br />
            <h3 className="committe-location">Dean SOT, PDEU Gandhinagar</h3>
          </div>
          <div className="subheading-details">
            Dr. Bhawanisingh Desai, <br />
            <h3 className="committe-location">Dean R&D, PDEU Gandhinagar</h3>
          </div>
          <div className="subheading-details">
            Dr. Praghnesh Bhatt, <br />
            <h3 className="committe-location">Dean SOET, PDEU Gandhinagar</h3>
          </div>
          <div className="subheading-details">
            Dr. Vishvesh J Badheka, <br />
            <h3 className="committe-location">Dean Academic Affairs, PDEU Gandhinagar</h3>
          </div>
          <div className="subheading-details">
            Dr. Rajesh Patel, <br />
            <h3 className="committe-location">Dean Admission, PDEU Gandhinagar</h3>
          </div>
          <div className="subheading-details">
            Prof. R.K.Vij, <br />
            <h3 className="committe-location">Dean of Placements, PDEU Gandhinagar</h3>
          </div>
          <div className="subheading-details">
            Prof. Ranjan Sengupta, <br />
            <h3 className="committe-location">PDEU Gandhinagar</h3>
          </div>
          <div className="subheading-details">
            Dr. Ramesh Guduru, <br />
            <h3 className="committe-location">PDEU Gandhinagar</h3>
          </div>
          <div className="subheading-details">
            Dr. Nitin Chaudhari,
            <br />
            <h3 className="committe-location">PDEU Gandhinagar</h3>
          </div>
          <div className="subheading-details">
            Dr. Abhijit D Ray,
            <br />
            <h3 className="committe-location">PDEU Gandhinagar</h3>
          </div>
        </div>

        {/* <div className="subheading-2">
          <h3>ORGANIZING COMMITTEE </h3>
          <div className="subheading-details-2">Dr. Rohit Srivastava</div>
          <div className="subheading-details-2">Dr. Achinta Bera</div>
          <div className="subheading-details-2">Dr. Vivek Ramalingam</div>
          <div className="subheading-details-2">Dr. Amit Verma</div>
          <div className="subheading-details-2">Dr. Paul Naveen</div>
          <div className="subheading-details-2">Dr. Balanagalu Basupalli</div>
          <div className="subheading-details-2">Dr. Abhishek Kumar Gupta</div>
          <div className="subheading-details-2">Dr. Ankur Solanki</div>
          <div className="subheading-details-2">Dr. Hepzibah Mary</div>
          <div className="subheading-details-2">Dr. Rajat Saxena</div>
          <div className="subheading-details-2">Dr. Himanshu Choksi</div>
          <div className="subheading-details-2">Mr. Gaurav Hazarika</div>
          <div className="subheading-details-2">Dr. Lakshmann Rao Jeeru</div>
          <div className="subheading-details-2">Dr. Hari Sreenivasan</div>
          <div className="subheading-details-2">Dr. Balasubramanian Ragunathan</div>
          <div className="subheading-details-2">Dr. Shanker Krishna</div>
          <div className="subheading-details-2">Dr. Maunish Shah</div>
          <div className="subheading-details-2">Dr. Namrata Bist</div>
          <div className="subheading-details-2">Dr. Akash Patel</div>
          <div className="subheading-details-2">Dr. Kaushal Kishor</div>
          <div className="subheading-details-2">Dr. Amrita Chakraborty</div>
        </div> */}

        {/* <div className="subheading-2">
          <h3>SCHOLARS/STUDENTS ORGANIZING COMMITTEE </h3>
          <div className="subheading-details-2">Ms. Avni Goswami</div>
          <div className="subheading-details-2">Ms. Sneha Lavate</div>
          <div className="subheading-details-2">Mr. Hari Pavan Sriram Yalamati</div>
          <div className="subheading-details-2">Mr. Isaac Wilson</div>
          <div className="subheading-details-2">Mr. Anuj Jain</div>
          <div className="subheading-details-2">Ms. Chaandini JP</div>
          <div className="subheading-details-2">Mr. Shubham Nayak</div>
          <div className="subheading-details-2">Mr. Anshul</div>
          <div className="subheading-details-2">Mr. Kiran B</div>
          <div className="subheading-details-2">Mr. Shaikh Fazeel</div>
        </div> */}
      </div>

      {/* </div> */}
      <Footer />
    </div>
  )
}

export default Committee
