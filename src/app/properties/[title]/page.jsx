import { properties } from "@/app/data"
import Head from 'next/head';
import TestimonialPage from "@/app/testimonial/page";
import SearchBar from '@/app/components/SearchBar';
import Script from 'next/script';
import PropertyLists from '@/app/components/PropertyLists';
import Header2 from "@/app/components/Header2";
import PropertyTabs from '@/app/components/PropertyTab';
import PropertyCard from "@/app/components/PropertyCard";
import '/public/css/bootstrap.min.css';
import '/public/css/style.css';
import Goback from "@/app/components/Goback";

export default function PropertyDetails({params}) {
    const details = properties.find(property => property.title.split(' ').join('-') == params.title)
  return (
    <div>
      <Head/>
      <Header2/>
      <SearchBar/>
      <h1>{details.title}</h1>
      <PropertyCard 
          title={details.title}
          description={details.description}
          location={details.location}
          price={details.price}
          image={details.image}
          status={details.status}
          area={details.area}
          beds={details.beds}
          baths={details.baths}
          Category={details.category}
        />

        <Goback/>
        <PropertyLists/>
    </div>
  )
}
