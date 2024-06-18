import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friends/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import AppList from './AppList/AppList';
import Form from './Form/Form';
import Phonebook from './Phonebook/Phonebook'
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './Friends/friends.json';
import transactions from './TransactionHistory/transactions.json';
import colors from './ColorPicker/colors.json';
import './app.css';

const App = () => {
  return (
    <div className="app">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <Counter />
      <Dropdown />
      <ColorPicker options={colors.colors} />
      <AppList />
      <Form />
      <Phonebook />
    </div>
  );
};

export default App;
