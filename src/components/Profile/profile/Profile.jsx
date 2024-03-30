import profileData from "./profile.json";
import css from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={css.profileContainer}>
      <div>
        <img
          className={css.profilePicture}
          src={profileData.avatar}
          alt="User Avatar"
        />
        <p className={css.profileUsername}>{profileData.username}</p>
        <p className={css.profileTag}>{profileData.tag}</p>
        <p className={css.profileLocation}>{profileData.location}</p>
      </div>

      <ul className={css.profileWrapper}>
        <li className={css.profileLi}>
          <span>Followers</span>
          <span className={css.profileSpan}>{profileData.stats.followers}</span>
        </li>
        <li className={css.profileLi}>
          <span>Views</span>
          <span className={css.profileSpan}>{profileData.stats.views}</span>
        </li>
        <li className={css.profileLi}>
          <span>Likes</span>
          <span className={css.profileSpan}>{profileData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
