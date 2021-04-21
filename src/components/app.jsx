
import React from 'react';
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = () => {
  const src = "assets/images/logo.svg";
  console.log(src)
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src={src} alt="logo" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};


export default App;
