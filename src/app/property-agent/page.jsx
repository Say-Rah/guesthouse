import React from 'react'
import Header2 from '../components/Header2';
import SearchBar from '../components/SearchBar';
import TeamSection from '../components/TeamSection';
import Contact from '../components/Contact';

export default function PropertyAgentPage() {
    return (
        <div>
            <Header2/>
            <SearchBar/>
           <TeamSection/>
           <Contact/>
        </div>
      );
    }