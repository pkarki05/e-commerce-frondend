import React from 'react';

const Sidebar = ({ onSectionChange }) => {
    return (
        <div className="sidebar">
            <ul>
                <li onClick={() => onSectionChange('profileDetails')}>Profile Details</li>
                <li onClick={() => onSectionChange('shippingAddress')}>Shipping Address</li>
                <li onClick={() => onSectionChange('shoppingHistory')}>Shopping History</li>
            </ul>
        </div>
    );
};

export default Sidebar;
