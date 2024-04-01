import Profile from "./components/Profile/profile/Profile";
import userData from "./components/Profile/profile/profile.json";

import friends from "./components/friendsList/friend.json";
import FriendList from "./components/friendsList/FriendList";

import transactions from "./components/TransactionHistory/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import "./App.css";

function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
