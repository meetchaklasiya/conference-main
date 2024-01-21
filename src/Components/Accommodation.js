import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../assets/css/registrationfee.css"

export default function Accommodation() {
    return (
        <div>
            <Navbar />
            <div className="regHead">
                <h2>Accommodation</h2>
            </div>
            <table>
                <thead>
                    {/* <p className="table-heading">Early bird registration up to 20 January 2024</p> */}
                    <tr>
                        <th>Sr.no</th>
                        <th>Hotel Name</th>
                        {/* <th data-priority="2">Early bird registration up to 30 December 2023 */}
                        <th>Address</th>
                        <th>Distance from PDPU
                        </th>
                        <th>Contact No</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Hotel Lemon Grass</td>
                        <td>Bhaijipura PDPU Cross Rd, Gandhinagar</td>
                        <td>3 kms</td>
                        <td>9023763664</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Hotel Premium Villa</td>
                        <td>A Block, 2nd Floor, Radhe Areade, Near:- Shri Bank Kudasan, Gandhinagar, Gujarat 382421</td>
                        <td>5 kms</td>
                        <td>9558349797</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Hotel Royal Mansion</td>
                        <td>Bhaijipura PDPU Cross Rd, Gandhinagar</td>
                        <td>3 kms</td>
                        <td>8155870111</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Hotel Vivan</td>
                        <td>Bhaijipura PDPU Cross Rd, Gandhinagar</td>
                        <td>3 kms</td>
                        <td>9974945884</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Hotel Prominent
                            (Prominent corporate residency)
                        </td>
                        <td>Near, 403-404, Fourth Floor, Prominent Hotel road, Urjanagar, 1 Kudasan, Gandhinagar-382421</td>
                        <td>5.5 kms</td>
                        <td>7227036410</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Hotel 7 Wonders
                        </td>
                        <td>7th Floor, Ugti Coorporate Park,Kudasan, Opposite HDFC Bank, Airpot Gandhinagar Highway, Gandhinagar-382421</td>
                        <td>5 kms</td>
                        <td>7923603177</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Hotel City Inn
                        </td>
                        <td>A-401, Pramukh Areade-2, Opp Nid, Reliance Cross road Kudasan Gandhinagar-382421</td>
                        <td>6.5kms</td>
                        <td>9408563953</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Hotel Prime
                        </td>
                        <td>5th Floor, Pramukh Mastana, Reliance Cross road, Urjanagar1, Kudasan, Gandhinagar-382421</td>
                        <td>6.5 kms</td>
                        <td>9408563953</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Hotel Grand Mercury
                        </td>
                        <td>Grand mercury Gift City, Next To Gift Towers, Gandhinagar, Gujarat 382355</td>
                        <td>5 kms</td>
                        <td>7961801300</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Hotel Ashoka Inn
                        </td>
                        <td>301, Hotel Ashooka INN, 3rd Floor, Radhe Aerade, Kudasan, Opp City Pulse, Gandhinagar- 382421</td>
                        <td>5 kms</td>
                        <td>9523500010</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Gift City Club & Business Center
                        </td>
                        <td>GIFT City Club, Shram Marg, Gujarat International Finance Tec-City, Gandhinagar
                            Gujarat 382355
                        </td>
                        <td>5 kms</td>
                        <td>6359700129</td>
                    </tr>
                </tbody>
            </table>
            <Footer />
        </div>
    )

}
