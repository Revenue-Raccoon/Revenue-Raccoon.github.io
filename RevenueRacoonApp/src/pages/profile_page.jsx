import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import { getUserObject } from '../functions/getUserFromFirebase.js'; // Import the getUserObject function
import { updateProfile, getAuth } from 'firebase/auth';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const authUser = await getUserObject();
        if (authUser) {
          setUser(authUser);
          setDisplayName(authUser.displayName || '');
          setPhotoURL(authUser.photoURL || ''); // Initialize with the user's current photo URL
        }
      } catch (error) {
        // Handle errors
        console.error('Error fetching user object: ', error);
      }
    };

    fetchUser();
  }, []);

  const handleUpdateProfile = async () => {
    if (user) {
      try {
        if (displayName !== user.displayName || profilePhoto) {
          if (profilePhoto) {
            // Upload the profile photo to a storage service (e.g., Firebase Storage)
            // You need to implement the file upload logic here
            // After uploading, set the 'photoURL' to the uploaded image's URL
            // Example:
            // const uploadedPhotoURL = await uploadProfilePhoto(profilePhoto);
            // setPhotoURL(uploadedPhotoURL);
          }

          await updateProfile(user, {
            displayName: displayName,
            photoURL: photoURL, // Use the updated photo URL here
          });

          // Profile updated successfully
          console.log('Profile updated');
        } else {
          console.log('No profile updates required.');
        }
      } catch (error) {
        // Handle errors
        console.error('Error updating profile: ', error);
      }
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
    }
  };

  return (
    <Layout>
      <div>
        {user ? (
          <div>
            <h2>Welcome, {user.displayName || 'User'}</h2>
            <img
              src={photoURL || 'default-profile-photo-url.jpg'}
              alt="Profile"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
            <input
              type="text"
              placeholder="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <button onClick={handleUpdateProfile}>Update Profile</button>
          </div>
        ) : (
          <p>Loading user information...</p>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
