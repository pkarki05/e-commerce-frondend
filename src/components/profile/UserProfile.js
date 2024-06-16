import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './profile.css';
import { updateUserProfile } from '../../pages/auth/UserAction';
import avatar from '../../images/profile-avatar.png'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import storage from 'redux-persist/lib/storage';


const UserProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const [profile, setProfile] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [profilePic, setProfilePic] = useState(null);


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
        if (e.target.files[0]) {
            setProfilePic(e.target.files[0]);
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
    return (
        <div className="profile-container">
        <div className="profile-header">
            <img src={profile.avatar || avatar} alt="User Avatar" className="profile-avatar" />
            <h1 className="profile-name">{profile.firstName} {profile.lastName}</h1>
            <p className="profile-email">{profile.email}</p>
            <button className="button" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
        </div>
        <div className="profile-details">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    
                    <div className='d-flex row w-50'>
                        <label>Username:</label>
                        <input type="text" name="username" value={profile.username || ''} onChange={handleChange} />
                    </div>
                    <div className='d-flex row w-50'>
                        <label>Phone:</label>
                        <input type="text" name="phone" value={profile.phone || ''} onChange={handleChange} />
                    </div>
                    <div className='d-flex row w-50'>
                        <label>Address:</label>
                        <input type="text" name="address" value={profile.address || ''} onChange={handleChange} />
                    </div>
                    <div className='d-flex row w-50'>
                        <label>Profile Picture:</label>
                        <input type="file" onChange={handleFileChange} />
                    </div>
                    <button type="submit" className='button'>Update Profile</button>
                </form>
            ) : (
                <div>
                    <h2>Profile Details</h2>
                    <p><strong>Username:</strong> {profile.username}</p>
                    <p><strong>Phone:</strong> {profile.phone}</p>
                    <p><strong>Address:</strong> {profile.address}</p>
                </div>
            )}
        </div>
    </div>
    );
};

export default UserProfile;
