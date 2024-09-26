import Header from "./components/Header";
// import Header2 from './components/Header2';
import SearchBar from './components/SearchBar';
import PropertyTypes from './components/PropertyTypes';
import AboutSection from './components/AboutSection';
// import PropertyLists from './components/PropertyLists';
import Contact from './components/Contact';
import TeamSection from './components/TeamSection';
import Review from './components/Review';
import PropertyTabs from './components/PropertyTab';


export default function Home() {
  return (
    <>
      <Header/>
      {/* <Header2/> */}
      {/* <PropertyTabs/> */}
      <SearchBar/>
      <PropertyTypes/>
      <AboutSection/>
      {/* <PropertyLists/> */}
      <Contact/>
      <TeamSection/>
      <Review/>
    </>
  )
}
