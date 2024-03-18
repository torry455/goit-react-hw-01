import FriendListItem from './FriendListItem';
import css from "./FriendList.module.css";

const FriendList = ({ friend }) => {
  return (
    <ul className={css.friendsList}>
      {friend.map(({ avatar, id, isOnline, name }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        />
      ))}
    </ul>
  );
};

export default FriendList;