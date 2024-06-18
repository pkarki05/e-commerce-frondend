import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { MdWorkHistory } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";

const Sidebar = ({ onSectionChange }) => {
    const [activeSection, setActiveSection] = useState('profileDetails'); // Set initial active section

    const handleSectionChange = (section) => {
        onSectionChange(section);
        setActiveSection(section);
    };

    return (
        <div className="sidebar">
            <ul>
                <li className={activeSection === 'profileDetails' ? 'active' : ''} onClick={() => handleSectionChange('profileDetails')}>
                    <CgProfile /> Profile Details
                </li>
                <li className={activeSection === 'shippingAddress' ? 'active' : ''} onClick={() => handleSectionChange('shippingAddress')}>
                    <FaAddressCard /> Shipping Address
                </li>
                <li className={activeSection === 'shoppingHistory' ? 'active' : ''} onClick={() => handleSectionChange('shoppingHistory')}>
                    <MdWorkHistory /> Shopping History
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
