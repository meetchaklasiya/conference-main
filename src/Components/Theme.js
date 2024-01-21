import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../assets/css/theme.css"

export default function Theme() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="themes-heading">Theme</h1>
        <p className="selected-theme">The selected theme for the conference, <b>"Competencies and technology for a safe and long-lasting energy security,"</b> encapsulates the significant contribution made by our Oil and Gas community to the societies in which we reside and operate.</p>
      </div>
      <div className="">
        <h1 className="about-subheading">Thrust Areas</h1>
        <ul className="areas">
          <li>Drilling and Completion</li>
          <li>Production/ Reservoir/ EOR/IOR/ Integrated Reservoir Management</li>
          <li>Geosciences and Geophysics</li>
          <li>Unconventional Reservoirs (Coalbed Methane, Shale, Gas Hydrates, and Tight oil)</li>
          <li>Data Science and Artificial Intelligence</li>
          <li>Energy Transition</li>
          <li>Health, Safety and Environment</li>
          <li style={{marginBottom:'50px'}}>Multidisciplinary topics (CCUS, Pipeline/Flow Assurance, City Gas Distribution, and Refinery)</li>
        </ul>
      </div>
      <Footer />
    </div>
    // <div style={{backgroundColor: "#f5f5f5"}}>
    //   <Navbar />

    //   <h1 className="themes-heading">Themes</h1>

    //   <div className="wrapper">
    //     <div className="cols">
    //       <div className="col" ontouchstart="this.classList.toggle('hover');">
    //         <div className="container">
    //           <div
    //             className="front"
    //             style={{
    //               backgroundImage:
    //                 "url(https://f000.backblazeb2.com/file/hp-cloud/theme-1.jpg)",
    //             }}
    //           >
    //             <div className="inner">
    //               <p>Hydrogen Production and Catalysis</p>
    //               {/* <span>Lorem ipsum</span> */}
    //             </div>
    //           </div>
    //           <div className="back">
    //             <div className="inner">
    //               <p>
    //                 <ul>
    //                   <li>
    //                   Hydrogen production using renewable energy
    //                   </li>
    //                   <li>
    //                   Bifunctional catalysts for water splitting
    //                   </li>
    //                   <li>
    //                   Catalysts for HER
    //                   </li>
    //                   <li>
    //                   OER and ORR
    //                   </li>
    //                   <li>
    //                   Electrocatalysis
    //                   </li>
    //                   <li>
    //                     Electrodes
    //                   </li>
    //                 </ul> 
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col" ontouchstart="this.classList.toggle('hover');">
    //         <div className="container">
    //           <div
    //             className="front"
    //             style={{
    //               backgroundImage:
    //                 "url(https://f000.backblazeb2.com/file/hp-cloud/theme-2.jpg)",
    //             }}
    //           >
    //             <div className="inner">
    //               <p>Fuel Cells</p>
    //               {/* <span>Lorem ipsum</span> */}
    //             </div>
    //           </div>
    //           <div className="back">
    //             <div className="inner">
    //               <p>
    //                 <ul>
    //                   <li>Fuel Cell</li>
    //                   <li> Reversible Fuel Cell</li>
    //                   <li> Membrane for fuel cell and electrolyser</li>
    //                 </ul>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col" ontouchstart="this.classList.toggle('hover');">
    //         <div className="container">
    //           <div
    //             className="front"
    //             style={{
    //               backgroundImage:
    //                 "url(https://f000.backblazeb2.com/file/hp-cloud/theme-3.jpg)",
    //             }}
    //             // style="background-image: url(https://unsplash.it/502/502/)"
    //           >
    //             <div className="inner">
    //               <p>Hydrogen Storage</p>
    //               {/* <span>Lorem ipsum</span> */}
    //             </div>
    //           </div>
    //           <div className="back">
    //             <div className="inner">
    //               <p>
    //                 <li>Solid</li>
    //                 <li>Liquid and Gaseous H<sub>2</sub> storage</li>
    //                 <li>H<sub>2</sub> compressor</li>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col" ontouchstart="this.classList.toggle('hover');">
    //         <div className="container">
    //           <div
    //             className="front"
    //             style={{
    //               backgroundImage:
    //                 "url(https://f000.backblazeb2.com/file/hp-cloud/theme-4.jpg)",
    //             }}
    //             // style="background-image: url(https://unsplash.it/503/503/)"
    //           >
    //             <div className="inner">
    //               <p>Hydrogen Transportation</p>
    //               {/* <span>Lorem ipsum</span> */}
    //             </div>
    //           </div>
    //           <div className="back">
    //             <div className="inner">
    //               <p>
    //                 <ul>
    //                   <li>In-line Transportation</li>
    //                   <li>By road transportation</li>
    //                   <li>Filling stations</li>
    //                   <li>Roadmaps</li>
    //                 </ul>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col" ontouchstart="this.classList.toggle('hover');">
    //         <div className="container">
    //           <div
    //             className="front"
    //             style={{
    //               backgroundImage:
    //                 "url(https://f000.backblazeb2.com/file/hp-cloud/theme-5.jpg)",
    //             }}
    //             // style="background-image: url(https://unsplash.it/504/504/"
    //           >
    //             <div className="inner">
    //               <p>Hydrogen Economy, Strategy, and Policy</p>
    //               {/* <span>Lorem ipsum</span> */}
    //             </div>
    //           </div>
    //           <div className="back">
    //             <div className="inner">
    //               <p>
    //                 <ul>
    //                   <li>H<sub>2</sub> based economy</li>
    //                   <li> strategies and Policies inside India and outside India</li>
    //                 </ul>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col" ontouchstart="this.classList.toggle('hover');">
    //         <div className="container">
    //           <div
    //             className="front"
    //             style={{
    //               backgroundImage:
    //                 "url(https://f000.backblazeb2.com/file/hp-cloud/theme-6.jpg)",
    //             }}
    //             // style="background-image: url(https://unsplash.it/505/505/)"
    //           >
    //             <div className="inner">
    //               <p>Hydrogen Utilization</p>
    //               {/* <span>Lorem ipsum</span> */}
    //             </div>
    //           </div>
    //           <div className="back">
    //             <div className="inner">
    //               <p>
    //                 <ul>
    //                   <li>H<sub>2</sub> in households</li>
    //                   <li>vehicles</li>
    //                   <li>industries</li>
    //                 </ul>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col" ontouchstart="this.classList.toggle('hover');">
    //         <div className="container">
    //           <div
    //             className="front"
    //             style={{
    //               backgroundImage:
    //                 "url(https://f000.backblazeb2.com/file/hp-cloud/theme-7.jpg)",
    //             }}
    //             // style="background-image: url(https://unsplash.it/506/506/)"
    //           >
    //             <div className="inner">
    //               <p>Carbon capture, utilization, and storage</p>
    //               {/* <span>Lorem ipsum</span> */}
    //             </div>
    //           </div>
    //           <div className="back">
    //             <div className="inner">
    //               <p>
    //                 <ul>
    //                   <li>CO<sub>2</sub> capture</li>
    //                   <li>CO<sub>2</sub> sequestration</li>
    //                   <li>CO<sub>2</sub> storage</li>
    //                 </ul>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col" ontouchstart="this.classList.toggle('hover');">
    //         <div className="container">
    //           <div
    //             className="front"
    //             style={{
    //               backgroundImage:
    //                 "url(https://f000.backblazeb2.com/file/hp-cloud/theme-8.jpg)",
    //             }}
    //             // style="background-image: url(https://unsplash.it/508/508/)"
    //           >
    //             <div className="inner">
    //               <p>Sustainable Hydrogen Technologies</p>
    //               {/* <span>Lorem ipsum</span> */}
    //             </div>
    //           </div>
    //           <div className="back">
    //             <div className="inner">
    //               <p>
    //                 <ul>
    //                   <li>Green hydrogen infrastructure and utilization for future</li>
    //                 </ul>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col" ontouchstart="this.classList.toggle('hover');">
    //         <div className="container">
    //           <div
    //             className="front"
    //             style={{
    //               backgroundImage:
    //                 "url(https://f000.backblazeb2.com/file/hp-cloud/theme-9.jpg)",
    //             }}
    //             // style="background-image: url(https://unsplash.it/508/508/)"
    //           >
    //             <div className="inner">
    //               <p>Waste to Hydrogen Energy</p>
    //               {/* <span>Lorem ipsum</span> */}
    //             </div>
    //           </div>
    //           <div className="back">
    //             <div className="inner">
    //               <p>
    //                 <ul>
    //                   <li>H<sub>2</sub> production from biomass</li>
    //                   <li>Other wastes</li>
    //                 </ul>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col" ontouchstart="this.classList.toggle('hover');">
    //         <div className="container">
    //           <div
    //             className="front"
    //             style={{
    //               backgroundImage:
    //                 "url(https://f000.backblazeb2.com/file/hp-cloud/ai-ml.jpg",
    //             }}
    //             // style="background-image: url(https://unsplash.it/508/508/)"
    //           >
    //             <div className="inner">
    //               <p>AI/ML & Big Data</p>
    //               {/* <span>Lorem ipsum</span> */}
    //             </div>
    //           </div>
    //           <div className="back">
    //             <div className="inner">
    //               <p>
    //                 <ul>
    //                   <li>AI and ML approach for water splitting and CO<sub>2</sub> sequestration and storage</li>
    //                 </ul>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
  )
}
