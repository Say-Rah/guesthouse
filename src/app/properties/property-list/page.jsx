import Head from 'next/head';
import SearchBar from '@/app/components/SearchBar';
import Script from 'next/script';
import PropertyLists from '@/app/components/PropertyLists';
import Header2 from "@/app/components/Header2";
import PropertyTabs from '@/app/components/PropertyTab';
import '/public/css/bootstrap.min.css';
import '/public/css/style.css';
import Contact from '@/app/components/Contact';

export default function PropertyListPage(){
    return (
        <>
        {/* <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@700;800&display=swap" rel="stylesheet" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
            {/* <!-- JavaScript Libraries --> */}
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    
        {/* <!-- Template Javascript --> */}
        <script src="js/main.js"></script>
          {/* </Head> */} */
          <Header2/>
          <SearchBar/>
          <PropertyLists/>
          <Contact />
        </>
      )
    }
    