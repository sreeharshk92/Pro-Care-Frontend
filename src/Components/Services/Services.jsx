import React from 'react'
import { useState } from 'react';

import Navbar from '../Navbar/Navbar'
import ServicesBanner from './ServicesBanner'
import ServiceSidebar from './ServicesSidebar';

import CleaningCard from './Cleaning/CleaningCard';
import MaintenanceCard from './Maintenance/MaintenanceCard';
import MovingCard from './Moving/MovingCard';
import MountingCard from './Mounting/MountingCard';
import LandscapingCard from './Landscaping/LandscapingCard';


import Footer from '../Footer/Footer'


function Services() {

  const [selectedService,setSelectedService] = useState('Cleaning');
  const [searchResults,setSearchResults] = useState([]);

  const renderCard = () => {
    switch(selectedService)
    {
      case 'Maintenance': return <MaintenanceCard />;
      case 'Moving': return <MovingCard />;
      case 'Mounting': return <MountingCard />;
      case 'Landscaping': return <LandscapingCard />;
      default : return <CleaningCard data={searchResults}/>;
    }
  }


  return (
    <div>
      <Navbar/>
      <ServicesBanner setSearchResults={setSearchResults} />
      <div className="flex">
            <ServiceSidebar onSelect={setSelectedService} />
            <div className="flex-1 p-4">
                {renderCard()}
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Services
