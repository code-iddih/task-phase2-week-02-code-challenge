import React from 'react';
import BotCard from './BotCard';

//Function to dsplay my Army Bots
const MyBotArmy = ({ bots, onRemoveFromArmy }) => {
  return (
    //.map method helps to iterate through every bot
    <div className="my-bot-army-grid">
      {bots.map(bot => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          onAddToArmy={() => {}} 
          onRemoveFromCollection={onRemoveFromArmy} 
        />
      ))}
    </div>
  );
};

export default MyBotArmy;
