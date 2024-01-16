import React from "react";
import '../assets/css/Dates.css'
import Navbar from '../Components/Navbar.js';
import Footer from "../Components/Footer.js";

const Dates = () => {
    return ( 
        <>
            <Navbar />
            <div className="sponsorship-container">
    <h2 className="sponsorship-heading">Important Dates</h2>
    <table className="sponsorship-table">
      <thead>
        <tr>
          <th>S. No.</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>23 Jan 2024</td>
          <td>Call for Abstracts deadline</td>
        </tr>
        <tr>
          <td>2</td>
          <td>25 Jan 2024</td>
          <td>Acceptance notification</td>
        </tr>
        <tr>
          <td>3</td>
          <td>30 Jan 2024</td>
          <td>Early registration deadline</td>
        </tr>
        <tr>
          <td>4</td>
          <td>10 Feb 2024</td>
          <td>Regular registration deadline</td>
        </tr>
        <tr>
            <td>5</td>
            <td>16th and 17th Feb</td>
            <td>Conference dates</td>
        </tr>
      </tbody>
    </table>
  </div>
            <Footer />
        </>
     );
}
 
export default Dates;
