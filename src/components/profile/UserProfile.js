import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './profile.css';
import { updateUserProfile } from '../../pages/auth/UserAction';
import avatar from '../../images/profile-avatar.png'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import Sidebar from './Sidebar';
import { FaRegEdit } from "react-icons/fa";
import { storage } from '../../firrebase/firebaseConfig';
import MetaHelmentComp from '../MetaHelmentComp';
import BreadCrum from '../BreadCrum';



const UserProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const [profile, setProfile] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [profilePic, setProfilePic] = useState(null);
    const [section, setSection] = useState('profileDetails');
    const [isEditingAddress, setIsEditingAddress] = useState(false);




    useEffect(() => {
        if (user) {
            setProfile(user);
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
        
    };
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfilePic(e.target.files[0]);
        } else {
            console.error('No file selected');
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (profilePic) {
            const storageRef = ref(storage, `profilePictures/${profilePic.name}`);
            const uploadTask = uploadBytesResumable(storageRef, profilePic);
    
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // Optional: Handle upload progress
                },
                (error) => {
                    console.error('Upload error:', error);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    const updatedProfile = { ...profile, avatar: downloadURL };
                    dispatch(updateUserProfile(updatedProfile));
                    setIsEditing(false);
                }
            );
        } else {
            dispatch(updateUserProfile(profile));
            setIsEditing(false);
        }
    };
    const handleAddressSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserProfile(profile));
        setIsEditingAddress(false);
    };
    
    const renderSection = () => {
        switch (section) {
            case 'profileDetails':
                return (
                    <div className="profile-details">
                         <MetaHelmentComp title='Product Name' />
                        {isEditing ? (
                <form onSubmit={handleSubmit}>
                <div className="container mt-4">
                <div className="row mb-3">
                <div className="col ">
                    <label htmlFor="username" className='mb-1'>First Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        name="username" 
                        value={profile.fname || ''} 
                        onChange={handleChange} 
                        
                    />
                </div>
                <div className="col">
                    <label htmlFor="phone" className='mb-1'>Last Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="phone" 
                        name="phone" 
                        value={profile.lname || ''} 
                        onChange={handleChange} 
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="address" className='mb-1'>Phone:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="address" 
                        name="address" 
                        value={profile.phone || ''} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="col">
                    <label htmlFor="profilePicture" className='mb-1'>Profile Picture:</label>
                    <input 
                        type="file" 
                        className="form-control-file" 
                        id="profilePicture" 
                        onChange={handleFileChange} 
                    />
                </div>
            </div>
        </div>
                                <div className='d-flex justify-content-between p-5 '>
                                <button type="submit" className='button'>Update Profile</button>
                                <button type="submit" className='button bg-danger'>Cancel</button>

                                    
                                </div>
                            </form>
                        ) : (
                            <div className='profile-content'>
                             <h3>Profile Details</h3>
                                <div className='d-flex row '>
                                    <div className="col-9">
                                    <p><strong>Username:</strong> {profile.email}</p>
                                <p><strong>Phone:</strong> {profile.phone}</p>
                                <p><strong>Address:</strong> {profile.street && profile.city && profile.state && profile.postalCode && profile.country ?
                                        `${profile.street}, ${profile.city}, ${profile.state} (${profile.postalCode}), ${profile.country}` :
                                        'No shipping address provided'
                                    }</p>
                                                                        </div>
                                    <div className=" d-flex col-3 justify-content-end align-items-center p-5 ">
                                    <button className='border-0 rounded fs-5 bg-white'  onClick={() => setIsEditing(true)}>  Edit <FaRegEdit /></button>


                                    </div>

                                </div>
                               
                            </div>
                        )}
                    </div>
                );
                case 'shippingAddress':
                    return (
                        <div className="shipping-address">
                            <h3>Shipping Address</h3>
                            {isEditingAddress ? (
                                <form onSubmit={handleAddressSubmit}>
                                    <div className="mb-3 row">
                                        <div className="col">
                                        <label htmlFor="street" className='form-label'>Street:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="street"
                                            name="street"
                                            value={profile.street || ''}
                                            onChange={handleChange}
                                        />

                                        </div>
                                       
                                   
                                   
                                        <div className="col">
                                        <label htmlFor="city" className='form-label'>City:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            name="city"
                                            value={profile.city || ''}
                                            onChange={handleChange}
                                        />

                                        
                                    </div>
                                    </div>
                                    <div className="row mb-3">
                                    <div className=" col">
                                        <label htmlFor="state" className='form-label'>State:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="state"
                                            name="state"
                                            value={profile.state || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="postalCode" className='form-label'>Postal Code:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="postalCode"
                                            name="postalCode"
                                            value={profile.postalCode || ''}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    </div>
                                   
                                    <div className="mb-3 ">
                                        <label htmlFor="country" className='form-label'>Country:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="country"
                                            name="country"
                                            value={profile.country || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="d-flex col mb-3 justify-content-between">
                                    <button type="submit" className='button'>Update Address</button>
                                    <button type="button" className='button bg-danger' onClick={() => setIsEditingAddress(false)}>Cancel</button>

                                    </div>
                                  
                                </form>
                            ) : (
                                <div className='d-flex justify-content-between border rounded'>
                                    <p className='mt-2 fs-6'>
                                        {profile.street && profile.city && profile.state && profile.postalCode && profile.country ?
                                            `${profile.street}, ${profile.city}, ${profile.state} (${profile.postalCode}), ${profile.country}` :
                                            'No shipping address provided'
                                        }
                                    </p>
                                    <button className='border-0 rounded fs-5 bg-white mx-3' onClick={() => setIsEditingAddress(true)}>Edit <FaRegEdit /></button>
                                </div>
                            )}
                        </div>
                    );
            case 'shoppingHistory':
                return (
                    <div className="shopping-history">
                        <h2>Shopping History</h2>
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
      
    </tr>
  </thead>
  <tbody>
    {user.map((product,index)=>(
        <tr>
        <th scope="row">{index+1}</th>
        <td>{product.title}</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>

    ))}
    
    
  </tbody>
</table>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
         <MetaHelmentComp title= 'User Profile' />
         <BreadCrum title= 'User Profile'/>
        <div className="profile-container w-75">
       
            
        <Sidebar onSectionChange={setSection} />
        <div className="profile-content">
            <div className="profile-header ">
                <img src={profile.avatar || avatar} alt="User Avatar" className="profile-avatar" />
                <h1 className="profile-name">{profile.fname} {profile.lname}</h1>
                <p className="profile-email">{profile.email}</p>
            </div>
            {renderSection()}
        </div>
    </div>
    </>
    );
};

export default UserProfile;
