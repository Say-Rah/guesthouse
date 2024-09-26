import Header2 from "../components/Header2";
import SearchBar from '../components/SearchBar';
import AboutSection from "../components/AboutSection";
import Contact from "../components/Contact";
import TeamSection from "../components/TeamSection";

export default function AboutPage(){
    return(
        <div>
        <h1>About Us</h1>
        <Header2/>
      <SearchBar/>
      <AboutSection/>
      <Contact/>
      <TeamSection/>
        </div>
    )
}