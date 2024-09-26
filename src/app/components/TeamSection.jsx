import React from 'react';
import TeamMember from './TeamMember';

const TeamSection = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mx-auto mb-8 max-w-xl">
          <h1 className="text-3xl font-bold mb-4">Property Agents</h1>
          <p className="text-gray-600">
            Our team of experienced property agents is here to help you find the perfect home or investment. From personalized consultations to guided property viewings, our agents are committed to meeting your needs.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TeamMember
            name="Sarah Sylvester"
            designation="Founder"
            image="/img/team1.jpeg"
            facebook="#"
            twitter="#"
            instagram="#"
            delay="0.1s"
          />
          <TeamMember
            name="Alfred Konaughe"
            designation="CEO"
            image="/img/team2.png"
            facebook="#"
            twitter="#"
            instagram="#"
            delay="0.3s"
          />
          <TeamMember
            name="Esther Idongesit"
            designation="Estate Manager"
            image="/img/team3.png"
            facebook="#"
            twitter="#"
            instagram="#"
            delay="0.5s"
          />
          <TeamMember
            name="Luckson Odiase"
            designation="House Manager"
            image="/img/team4.png"
            facebook="#"
            twitter="#"
            instagram="#"
            delay="0.7s"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;



// import React from 'react';

// const TeamMember = ({ name, designation, image, delay }) => {
//   return (
//     <div className={`col-lg-3 col-md-6 fadeInUp wow`} style={{ animationDelay: delay }}>
//       <div className="team-item rounded overflow-hidden bg-white shadow-md">
//         <div className="relative">
//           <img className="img-fluid w-full h-64 object-cover" src={image} alt={name} />
//           <div className="absolute inset-x-1/2 top-full -translate-x-1/2 translate-y-1/2 flex items-center space-x-1">
//             <a className="btn bg-gray-100 p-2 rounded-full" href="#">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a className="btn bg-gray-100 p-2 rounded-full" href="#">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a className="btn bg-gray-100 p-2 rounded-full" href="#">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </div>
//         </div>
//         <div className="text-center py-4">
//           <h5 className="text-lg font-bold">{name}</h5>
//           <small className="text-gray-500">{designation}</small>
//         </div>
//       </div>
//     </div>
//   );
// };

// const TeamSection = () => {
//   return (
//     <div className="py-10">
//       <div className="container mx-auto">
//         <div className="text-center max-w-2xl mx-auto mb-8 wow fadeInUp" style={{ animationDelay: '0.1s' }}>
//           <h1 className="text-3xl font-bold mb-4">Property Agents</h1>
//           <p>
//             Our team of experienced property agents is here to help you find the perfect home or investment. From
//             personalized consultations to guided property viewings, our agents are committed to meeting your needs.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <TeamMember name="Sarah Sylvester" designation="Agent" image="/img/team1.jpeg" delay="0.1s" />
//           <TeamMember name="Alfred Konaughe" designation="Agent" image="/img/team2.png" delay="0.3s" />
//           <TeamMember name="Full Name" designation="Agent" image="/img/team-3.jpg" delay="0.5s" />
//           <TeamMember name="Full Name" designation="Agent" image="/img/team-4.jpg" delay="0.7s" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;
