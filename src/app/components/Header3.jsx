export default function Header3() {
  return (
    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        {/* Text Section */}
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">Property Agent</h1>
          <nav aria-label="breadcrumb animated fadeIn">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item text-body active" aria-current="page">
                Property Agent
              </li>
            </ol>
          </nav>
        </div>
        
        {/* img Section */}
        <div className="col-md-6 animated fadeIn">
          <img className="img-fluid" src="/img/carousel-2.jpg" alt="Property Agent Header" />
        </div>
      </div>
    </div>
  );
}

// import React from 'react'

// export default function Header() {
//     return (
//         <div className='grid grid-cols-3 grid-row-[300px_300px_300px] grid-rows-[200px_200px_200px]'>
//         <div className='bg-pink-800 md:col-span-4 md:row-span-3'></div>
//         <div className='bg-purple-900 md:row-span-2 md:col-span-2'></div>
//         <div className='bg-neutral-950'></div>
//         <div className='bg-purple-400'></div>

//         </div>
//     )
// }