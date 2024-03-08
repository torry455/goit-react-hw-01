
import profileData from '../../profile.json';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profileContainer'>
      <img className='profilePicture' src={profileData.avatar} alt="Profile Avatar" />
      <h1 className='profileUsername'>{profileData.username}</h1>
      <p className='profileTag'>{profileData.tag}</p>
      <p className='profileLocation'>{profileData.location}</p>
      <div className='profileWrapper'>
      <p>Followers <span> {profileData.stats.followers} </span></p>
      <p>Views <span> {profileData.stats.views} </span></p>
        <p>Likes <span> {profileData.stats.likes} </span></p>
        </div>
    </div>
  );
}

export default Profile;