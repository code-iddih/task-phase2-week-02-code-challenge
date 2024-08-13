import React from 'react';
import BotCard from './BotCard';
import './MyBotArmy.css';

// Function to display my Army Bots
const MyBotArmy = ({ bots, onRemoveFromArmy, onRemoveFromCollection }) => {
  return (
    // .map method helps to iterate through every bot
    <div className="my-bot-army-grid">
      {bots.map(bot => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          onAddToArmy={() => {}} 
          onRemoveFromCollection={onRemoveFromCollection} 
          onRemoveFromArmy={onRemoveFromArmy} // Pass the handler to remove the bot from the army
          isInArmy={true} // Indicate that this bot is in the army
        />
      ))}
    </div>
  );
};

export default MyBotArmy;
