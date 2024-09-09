import React from 'react';
import banner from './banner.png';

const ServiceSidebar = ({ onSelect }) => {
    return (
        <div 
            id="service-sidebar"
            className="relative w-64 min-h-screen flex flex-col text-white bg-center bg-cover"
            style={{ backgroundImage: `url(${banner})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-950 opacity-80"></div>

            {/* Content */}
            <div className="relative z-10 p-4 text-xl font-bold text-white">
                Services
            </div>
            <nav className="relative z-10 flex flex-col mt-4">
                <button onClick={() => onSelect('Cleaning')} className="px-4 py-2 text-left hover:bg-blue-950">
                    Cleaning
                </button>
                <button onClick={() => onSelect('Maintenance')} className="px-4 py-2 text-left hover:bg-blue-950">
                    Maintenance
                </button>
                <button onClick={() => onSelect('Landscaping')} className="px-4 py-2 text-left hover:bg-blue-950">
                    Landscaping and Gardening
                </button>
                <button onClick={() => onSelect('Mounting')} className="px-4 py-2 text-left hover:bg-blue-950">
                    Mounting
                </button>
                <button onClick={() => onSelect('Moving')} className="px-4 py-2 text-left hover:bg-blue-950">
                    Moving
                </button>
            </nav>
        </div>
    );
};

export default ServiceSidebar;
