import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/itenary.css'
import image from '../assets/images/Logos/Colloboration/CEGE logo.jpg'
import image1 from '../assets/images/Logos/Colloboration/MatCorr Logo.png'
import image2 from '../assets/images/Logos/Supporting Organizations/image-11.jpg'

const Sponsorship = () => {
  return (
    <div>
      <Navbar />
      <div className="sponsorship-container">
        <h1 className="sponsorship-heading">Conference Sponsorship</h1>
        <table className="sponsorship-table">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Category</th>
              <th>Amount (INR)</th>
              <th>Benefits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Diamond</td>
              <td>300000</td>
              <td>10 free delegate registrations</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Gold</td>
              <td>200000</td>
              <td>7 free delegate registrations</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Silver</td>
              <td>100000</td>
              <td>5 free delegate registrations</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Bronze</td>
              <td>50000</td>
              <td>2 free delegate registrations</td>
            </tr>
          </tbody>
        </table>
        <div>
          <h1 className="sponsorship-heading" style={{ marginTop: '50px' }}>Advertisement in the Abstract Book</h1>
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
        <div>
          <h1 className="sponsorship-heading" style={{ marginTop: '50px' }}>Sponsers</h1>
          <div className='flex'>
          <div className="car">
            <img
              // src="keynote-speakers/image-10.png"
              src={image}
              // alt="speaker"
              className="speaker"
            />
          </div>
          <div className="car">
            <img
              // src="keynote-speakers/image-10.png"
              src={image2}
              // alt="speaker"
            />
          </div>
          <div className="car">
            <img
              // src="keynote-speakers/image-10.png"
              src={image1}
              // alt="speaker"
              className="matcorr"
            />
          </div>
          </div>
          
        </div>
      </div>
      <div className='sponsorship-container'>
        <h3 className='sponsorship-heading'>For any furthur Queries, Contact us at <a class="url" href="mailto:icoges24@gmail.com">icoges24@gmail.com</a></h3>
      </div>

      <Footer />
    </div>
  )
}

export default Sponsorship;
