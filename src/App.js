import FirstPage from "./Pages/FirstPage"
import ContactPage from "./Pages/ContactPage"
import RegistrationFeePage from "./Pages/RegistrationFeePage"
// import {Routes, Route, HashRouter, BrowserRouter} from "react-router-dom"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import CommingSoon from "./Components/CommingSoon"
import Committee from "./Components/Committee"
import Theme from "./Components/Theme"
import Keynote from "./Components/Keynotespeakers"
import CallForPaper from "./Components/CallForPaper"
import Awards from "./Components/Awards"
import UpdatePost from "./Pages/UpdatePost"
import EditPost from "./Pages/EditPost"
// import Itenary from "./Components/Itenary"
import Sponsorship from "./Components/Sponsorship"
import Dates from "./Pages/Dates"
import ICOGES from "./Pages/ICOGES"
import Management from "./Pages/Management"
import Organizing from "./Pages/Organizing"
import International from "./Pages/International"
import National from "./Pages/National"
import Students from "./Pages/Students"
import Planary from "./Pages/Planary"
import SeesionLead from "./Pages/SessionLead"
import OralPresentors from './Pages/OralPresentors'
import PosterPresentors from './Pages/PosterPresentors'

function App() {
  return (
    // <HashRouter>
    //   <Routes>
    //     {/* <Route exact path="/" element={<RegistrationFeePage />} /> */}
    //     <Route exact path="/" element={<FirstPage />} />
    //     <Route exact path="/conference/committee" element={<Committee />} />
    //     <Route exact path="/conference/themes" element={<Theme />} />
    //     <Route exact path="/conference/commingsoon" element={<CommingSoon />} />
    //     <Route exact path="/conference/contact" element={<ContactPage />} />
    //     <Route exact path="/conference/registration" element={<RegistrationFeePage />} />
    //   </Routes>
    // </HashRouter>
    // <BrowserRouter>
    <Routes>
      {/* <Route exact path="/" element={<RegistrationFeePage />} /> */}
      <Route exact path="/" element={<FirstPage />} />
      <Route exact path="/conference" element={<FirstPage />} />
      <Route exact path="/committee" element={<Committee />} />
      <Route exact path="/themes" element={<Theme />} />
      <Route exact path="/commingsoon" element={<CommingSoon />} />
      <Route exact path="/contact" element={<ContactPage />} />
      <Route exact path="/registration" element={<RegistrationFeePage />} />
      <Route exact path="/keynotespeakers" element={<Keynote />} />
      <Route exact path="/callforpapers" element={<CallForPaper />} />
      <Route exact path="/news" element={<Awards />} />
      <Route exact path="/admin/updatepost" element={<UpdatePost />} />
      <Route exact path="/admin/editpost/:id" element={<EditPost />} />
      <Route exact path="/sponsorship" element={<Sponsorship />} />
      <Route exact path="/importantdates" element={<Dates />} />
      <Route exact path="/ICOGES" element={<ICOGES />} />
      <Route exact path="/Management" element={<Management />} />
      <Route exact path="/organizing" element={<Organizing />} />
      <Route exact path="/international" element={<International />} />
      <Route exact path="/national" element={<National />} />
      <Route exact path="/students" element={<Students />} />
      <Route exact path="/Planary" element={<Planary />} />
      <Route exact path="/Keynote" element={<Keynote />} />
      <Route exact path="/sessions" element={<SeesionLead />} />
      <Route exact path="/Presentors" element={<OralPresentors />} />
      <Route exact path="/OralPresentors" element={<PosterPresentors />} />
    </Routes>
    // </BrowserRouter>
  )
}

export default App
