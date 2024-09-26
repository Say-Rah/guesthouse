import React from 'react';
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';

// Add icons to the library
// library.add(faFacebookF, faTwitter, faInstagram);



const TeamMember = ({ name, designation, image, facebook, twitter, instagram, delay }) => {
  return (
    <div className="team-item rounded-lg overflow-hidden shadow-lg transition-all duration-300" style={{ animationDelay: delay }}>
      <div className="relative">
  <Image
    className="w-full h-60 object-cover"
    src={image}
    alt={name}
    style={{ objectFit: 'cover', height: '100%' }}
  />
    <div className="absolute center inset-x-1/2 top-full transform -translate-x-1/2 -translate-y-1/2 flex space-x-2">
        {/* Social Media Links */}
        <a href={facebook} className="bg-gray-200 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
        <FontAwesomeIcon icon={faFacebookF} className="text-blue-500 w-4 h-4" />
        </a>
        <a href={twitter} className="bg-gray-200 p-2 rounded-full hover:bg-blue-400 transition-colors duration-300">
        <FontAwesomeIcon icon={faTwitter} className="text-blue-400 w-4 h-4" />
        </a>
        <a href={instagram} className="bg-gray-200 p-2 rounded-full hover:bg-pink-500 transition-colors duration-300">
        <FontAwesomeIcon icon={faInstagram} className="text-pink-500 w-4 h-4" />
        </a>
    </div>
    </div>

      <div className="text-center p-4 bg-white">
        <h5 className="font-bold text-lg mb-1">{name}</h5>
        <small className="text-gray-500">{designation}</small>
      </div>
    </div>
  );
};

export default TeamMember;
