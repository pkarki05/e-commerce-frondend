import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './profile.css';
import { updateUserProfile } from '../redux/User/UserAction';

const UserProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const [profile, setProfile] = useState({});

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

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserProfile(profile));
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={profile.avatar || '/default-avatar.png'} alt="User Avatar" className="profile-avatar" />
                <h1 className="profile-name">{profile.firstName} {profile.lastName}</h1>
                <p className="profile-email">{profile.email}</p>
            </div>
            <div className="profile-details">
                <h2>Profile Details</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username" value={profile.username || ''} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="text" name="phone" value={profile.phone || ''} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Address:</label>
                        <input type="text" name="address" value={profile.address || ''} onChange={handleChange} />
                    </div>
                    <button type="submit">Update Profile</button>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;
