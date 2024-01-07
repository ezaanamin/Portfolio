import About from "./component/About";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Header from "./component/Header";
import MyProjets from "./component/MyProjets";
import ProfessionalExpertise from "./component/Professional Expertise";
function App() {
  return (
    <div >
  <Header/>
  <About/>
  <ProfessionalExpertise/>
  <MyProjets/>
  <Blog/>
  <Contact/>
    </div>
  );
}

export default App;
