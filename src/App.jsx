import Profile from './components/Profile/profile/Profile';

import friend from './components/friendsList/friend.json';
import FriendList from './components/friendsList/FriendList';

import transactions from './components/TransactionHistory/transactions.json';
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import './App.css';

function App() {
  return (
    <div>
      <Profile />
      <FriendList friend={friend} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;