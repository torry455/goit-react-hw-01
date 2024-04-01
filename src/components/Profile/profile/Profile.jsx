import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.description}>
        <img className={css.profilePicture} src={image} alt="User avatar" />
        <p className={css.profileUsername}>{name}</p>
        <p className={css.profileTag}>{tag.slice(1)}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileWrapper}>
        <li className={css.profileLi}>
          <span className={css.profileLabel}>Followers</span>
          <span className={css.profileSpan}>{stats.followers}</span>
        </li>
        <li className={css.profileLi}>
          <span className={css.profileLabel}>Views</span>
          <span className={css.profileSpan}>{stats.views}</span>
        </li>
        <li className={css.profileLi}>
          <span className={css.profileLabel}>Likes</span>
          <span className={css.profileSpan}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
